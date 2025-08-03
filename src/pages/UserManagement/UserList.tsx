import React, { useEffect, useState } from 'react'
import {
  Card,
  TableColumnsType,
  Input,
  Button,
  Form,
  Modal,
  Space,
  Segmented,
} from 'antd'
import AppBreadcrumb from '@/components/AppBreadcrumb/AppBreadcrumb'
import DataTable from '@/components/DataTable'
import useMessage from '@/components/MessageContent/useMessage'
import useSpin from '@/components/SpinContent/useSpin'
import { getListQuery } from '@/utils'
import DataTableFilter from '@/components/DataTableFilter'
import DataTableFilterItem from '@/components/DataTableFilter/DataTableFilterItem'
import UserForm from './UserForm'
import {
  GetTableDataFn,
  useAntdDataTable,
  useAntdDataTableSelections,
} from '@/hooks/dataTable'
import { useAntdEditModal } from '@/hooks/form'
import dayjs from 'dayjs'
import DeleteConfirm from '@/components/DeleteConfirm'
import UserOpAPI from '@/apis/UserOpAPI'
import { useUserStatusHelpers } from '@/enums/userStatusEnum'

const UserList: React.FC = () => {
  const { msg } = useMessage()
  const { toggleSpin } = useSpin()

  const [addForm] = Form.useForm()
  const editModal = useAntdEditModal({
    title: {
      add: '新增用户',
      edit: '編輯用户',
    },
  })

  const tabList = [
    {
      label: '全部',
      value: 'ALL',
    },
    {
      label: '待审核',
      value: 'POINTS',
    },
  ]

  const [tabKey, setTabKey] = useState('ALL')

  const { getUserStatusText } = useUserStatusHelpers()

  const columns: TableColumnsType<any> = [
    {
      title: '用户名',
      dataIndex: 'userName',
      width: 100,
        
    },
    {
      title: '手机号',
      dataIndex: 'userPhone',
      width: 200,
    },
    {
      title: '状态',
      dataIndex: 'userStatus',
      width: 100,
      render: (text) => <span className={
        text === 0 ? 'text-yellow-500' : text === 1 ? 'text-green-500' : 'text-red-500'
      }>{getUserStatusText(text)}</span>,
    },
    {
      title: '备注',
      dataIndex: 'remark',
      width: 160,
    },
    {
      title: '最后修改人',
      dataIndex: 'userRole',
      width: 160,
    },
    {
      title: '修改时间',
      dataIndex: 'updateTime',
      render: (_, record) => record.updateTime ? dayjs(record.updateTime).format('YYYY-MM-DD HH:mm:ss') : dayjs(record.createTime).format('YYYY-MM-DD HH:mm:ss'),
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
          <Button color='primary' variant="outlined" onClick={() => {
            addForm.setFieldsValue({
              userName: record.userName,
              userPhone: record.userPhone,
              remark: record.remark,
            })
            editModal.open(record.id)
          }}>
            修改
          </Button>
          <DeleteConfirm
            title="确认审批该数据？"
            onConfirm={() => {
              handleChangeStatus(record.id, 1)
            }}
          >
            <Button variant="outlined" style={{ color: '#13A07B', borderColor: '#13A07B' }} disabled={record.userStatus === 1}>
              审批
            </Button> 
          </DeleteConfirm>
          <DeleteConfirm
            title="确认失效该数据？"
            onConfirm={() => {
              handleChangeStatus(record.id, 2)
            }}
          >
            <Button variant="outlined" danger disabled={record.userStatus === 2}>
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
      const { data } = await UserOpAPI.find({
        ...listQuery,
        ...formData,
        userStatus: tabKey === 'ALL' ? undefined : tabKey === 'POINTS' ? 0 : undefined,
      })
      return {
        list: data.records,
        total: data.total
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

  const [confirmLoading, setConfirmLoading] = useState(false);
  const handleSubmit = async (data: any) => {
    setConfirmLoading(true)
    try {
      if (editModal.editId) {
        await UserOpAPI.editUser({
          ...data,
          id: editModal.editId
        })
      } else {
        await UserOpAPI.createUser(data)
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

  const handleChangeStatus = async (id: string, userStatus: number) => {
    try {
      toggleSpin(true)
      await UserOpAPI.userStatusAudit({
        id,
        userStatus,
      })
      refresh()
      msg.success('操作成功')
    } catch (error) {
      msg.$error(error)
    } finally {
      toggleSpin(false)
    }
  }

  useEffect(() => {
    refresh()
    clearAll()
  }, [tabKey])

  return (
    <div className="page-content">
      <AppBreadcrumb
        breadcrumbList={[{ title: '用户管理' }]}
      >
        <Space>
          <Button
            type="primary"
            onClick={() => {
              addForm.resetFields()
              editModal.open(null)
            }}
          >
            新增用户
          </Button>
        </Space>
      </AppBreadcrumb>

      <Card 
        className="page-card"
      >
        <DataTableFilter form={form} onReset={reset} onSubmit={submit}>
          <DataTableFilterItem label="用户名" name="userName">
            <Input placeholder="请输入" allowClear={true} />
          </DataTableFilterItem>
          <DataTableFilterItem label="手机号" name="userPhone">
            <Input placeholder="请输入" allowClear={true} />
          </DataTableFilterItem>
        </DataTableFilter>

        <Space>
          <Segmented<string>
            options={tabList}
            size="large"
            className='mb-2'
            onChange={(value) => {
              setTabKey(value)
            }}
          />
        </Space>

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
