import React, { useState } from 'react'
import {
  Card,
  TableColumnsType,
  Input,
  Button,
  Select,
  Form,
  Modal,
  Space,
} from 'antd'
import AppBreadcrumb from '@/components/AppBreadcrumb/AppBreadcrumb'
import DataTable from '@/components/DataTable'
import useMessage from '@/components/MessageContent/useMessage'
import useSpin from '@/components/SpinContent/useSpin'
import { getListQuery } from '@/utils'
import DataTableFilter from '@/components/DataTableFilter'
import DataTableFilterItem from '@/components/DataTableFilter/DataTableFilterItem'
import UserForm from './BackgroundForm'
import {
  GetTableDataFn,
  useAntdDataTable,
  useAntdDataTableSelections,
} from '@/hooks/dataTable'
import { useAntdEditModal } from '@/hooks/form'
import dayjs from 'dayjs'
import DeleteConfirm from '@/components/DeleteConfirm'
import PicAPI from '@/apis/PicAPI'
import { formatPicUrl } from '@/utils/format'
import { useStatusHelpers } from '@/enums/statusEnum'
import { useUserStatusHelpers } from '@/enums/userStatusEnum'

const UserList: React.FC = () => {
  const { msg } = useMessage()
  const { toggleSpin } = useSpin()

  const { getUserStatusText } = useUserStatusHelpers()

  const [addForm] = Form.useForm()
  const editModal = useAntdEditModal({
    title: {
      add: '新增背景图',
      edit: '編輯背景图',
    },
  })

  const { statusEnumOptions } = useStatusHelpers()

  const columns: TableColumnsType<any> = [
    {
      title: '图片',
      dataIndex: 'picId',
      width: 150,
      render: (text: any) => (
        <img
          src={formatPicUrl(text)}
          style={{ width: 108, height: 192, objectFit: 'cover' }}
        />
      ),
    },
    {
      title: '图片名称',
      dataIndex: 'picName',
      width: 200,
    },
    {
      title: '状态',
      dataIndex: 'picStatus',
      width: 100,
      render: (text) => (
        <span
          className={
            text === 0
              ? 'text-yellow-500'
              : text === 1
                ? 'text-green-500'
                : 'text-red-500'
          }
        >
          {getUserStatusText(text)}
        </span>
      ),
    },
    {
      title: '备注',
      dataIndex: 'picRemark',
      width: 200,
      render: (text: any) => text || '-',
    },
    {
      title: '最后修改人',
      dataIndex: 'updateUserName',
      width: 160,
    },
    {
      title: '修改时间',
      dataIndex: 'updateTime',
      render: (_, record) =>
        record.updateTime
          ? dayjs(record.updateTime).format('YYYY-MM-DD HH:mm:ss')
          : dayjs(record.createTime).format('YYYY-MM-DD HH:mm:ss'),
      width: 220,
    },
    {
      title: '操作',
      key: 'operation',
      align: 'center',
      fixed: 'right',
      width: 260,
      render: (_, record) => (
        <Space>
          <Button
            color="primary"
            variant="outlined"
            onClick={() => {
              addForm.setFieldsValue({
                picName: record.picName,
                picRemark: record.picRemark,
                picId: record.picId,
              })
              editModal.open(record.id)
            }}
          >
            修改
          </Button>
          <DeleteConfirm
            title="确认生效该数据？"
            onConfirm={() => {
              handleChangeStatus(record.id, 1)
            }}
          >
            <Button
              variant="outlined"
              disabled={record.picStatus === 1}
              style={{ color: '#13A07B', borderColor: '#13A07B' }}
            >
              生效
            </Button>
          </DeleteConfirm>
          <DeleteConfirm
            title="确认失效该数据？"
            onConfirm={() => {
              handleChangeStatus(record.id, 2)
            }}
          >
            <Button variant="outlined" danger disabled={record.picStatus === 2}>
              失效
            </Button>
          </DeleteConfirm>
        </Space>
      ),
    },
  ]

  const getTableData: GetTableDataFn = async (params, formData) => {
    try {
      const listQuery = getListQuery(params)
      const { data } = await PicAPI.find({
        ...listQuery,
        ...formData,
      })
      return {
        list: data.records,
        total: data.total,
      }
    } catch (error) {
      msg.$error(error)
      return {
        total: 0,
        list: [],
      }
    } finally {
      clearAll()
    }
  }

  const [form] = Form.useForm()
  const { data, tableProps, search, refresh } = useAntdDataTable(getTableData, {
    form,
  })
  const { reset, submit } = search

  const { rowSelection, clearAll } =
    useAntdDataTableSelections(data?.list || [])

  const [confirmLoading, setConfirmLoading] = useState(false)
  const handleSubmit = async (data: any) => {
    setConfirmLoading(true)
    try {
      if (editModal.editId) {
        await PicAPI.edit({
          ...data,
          id: editModal.editId,
        })
      } else {
        await PicAPI.add(data)
      }
      msg.success('操作成功')
      refresh()
      editModal.close()
    } catch (error) {
      msg.$error(error)
    } finally {
      addForm.resetFields()
      setConfirmLoading(false)
    }
  }

  const handleChangeStatus = async (id: string, picStatus: number) => {
    try {
      toggleSpin(true)
      await PicAPI.picStatusAudit({
        id,
        picStatus,
      })
      refresh()
      msg.success('操作成功')
    } catch (error) {
      msg.$error(error)
    } finally {
      toggleSpin(false)
    }
  }

  return (
    <div className="page-content">
      <AppBreadcrumb breadcrumbList={[{ title: '背景图管理' }]}>
        <Space>
          <Button
            type="primary"
            onClick={() => {
              addForm.resetFields()
              editModal.open(null)
            }}
          >
            新增背景图
          </Button>
        </Space>
      </AppBreadcrumb>

      <Card className="page-card">
        <DataTableFilter form={form} onReset={reset} onSubmit={submit}>
          <DataTableFilterItem label="图片名称" name="name">
            <Input placeholder="请输入" allowClear={true} />
          </DataTableFilterItem>
          <DataTableFilterItem label="状态" name="status">
            <Select
              options={statusEnumOptions}
              className="w-full"
              placeholder="请选择"
              allowClear={true}
            />
          </DataTableFilterItem>
        </DataTableFilter>

        <DataTable
          columns={columns}
          rowSelection={rowSelection}
          {...tableProps}
        />
      </Card>

      <Modal
        {...editModal.modalProps}
        width={400}
        maskClosable={false}
        confirmLoading={confirmLoading}
        onOk={() => addForm.submit()}
        onCancel={() => {
          addForm.resetFields()
          editModal.close()
        }}
      >
        <UserForm
          form={addForm}
          onFinish={handleSubmit}
        />
      </Modal>
    </div>
  )
}

export default UserList
