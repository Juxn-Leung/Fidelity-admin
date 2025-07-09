import React, { useEffect, useState } from 'react'
import {
  Card,
  TableColumnsType,
  Input,
  Button,
  Select,
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
import ConfigureSystemHardwareAPI from '@/apis/ConfigureSystemHardwareAPI'
import { useStatusHelpers } from '@/enums/statusEnum'

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

  const { statusEnumOptions } = useStatusHelpers()

  const columns: TableColumnsType<any> = [
    {
      title: '用户名',
      dataIndex: 'name',
    },
    {
      title: '手机号',
      dataIndex: 'phone',
    },
    {
      title: '状态',
      dataIndex: 'status',
    },
    {
      title: '备注',
      dataIndex: 'remark',
    },
    {
      title: '最后修改人',
      dataIndex: 'modifiedBy',
    },
    {
      title: '修改时间',
      dataIndex: 'modifiedTime',
      render: (text: any) => text && dayjs(text).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: '操作',
      key: 'operation',
      align: 'center',
      fixed: 'right',
      width: 260,
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => editModal.open(record.id)}>
            修改
          </Button>
          <DeleteConfirm
            title="确认审批该数据？"
            onConfirm={() => {
              handleApproval(record.id)
            }}
          >
            <Button type="link" style={{ color: '#e9b745' }}>
              审批
            </Button> 
          </DeleteConfirm>
          <DeleteConfirm
            title="确认失效该数据？"
            onConfirm={() => {
              handleDelete([record.id])
            }}
          >
            <Button type="link" danger>
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
      // const { content, totalElements } = await ConfigureSystemHardwareAPI.find({
      //   ...listQuery,
      //   ...formData,
      // })
      console.log('listQuery', listQuery, formData)
      const content = [
        {
          id: '1',
          name: '张三',
          phone: '13800000000',
          status: '启用',
          remark: '用户',
          modifiedBy: '管理员',
          modifiedTime: '2023-10-01 12:00:00',
        },
        {
          id: '2',
          name: '李四',
          phone: '13900000000',
          status: '禁用',
          remark: '员工',
          modifiedBy: '管理员',
          modifiedTime: '2023-10-02 12:00:00',
        },
      ]
      const totalElements = content.length
      return {
        list: content,
        total: totalElements,
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

  const { selectedRowKeys, rowSelection, noneSelected, clearAll } =
    useAntdDataTableSelections(data?.list || [])

  const [confirmLoading, setConfirmLoading] = useState(false);
  const handleSubmit = async (data: any) => {
    setConfirmLoading(true)
    try {
      if (editModal.editId) {
        await ConfigureSystemHardwareAPI.update(editModal.editId, {
          ...data,
          type: 'QUICK_SCAN',
        })
      } else {
        await ConfigureSystemHardwareAPI.save({
          ...data,
          type: 'QUICK_SCAN',
        })
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

  const handleBatchDelete = async () => {
    try {
      toggleSpin(true)
      await ConfigureSystemHardwareAPI.batchDelete(selectedRowKeys)
      refresh()
      msg.success('操作成功')
    } catch (error) {
      msg.$error(error)
    } finally {
      toggleSpin(false)
    }
  }

  const handleDelete = async (ids: string[]) => {
    try {
      toggleSpin(true)
      await ConfigureSystemHardwareAPI.batchDelete(ids)
      refresh()
      msg.success('操作成功')
    } catch (error) {
      msg.$error(error)
    } finally {
      toggleSpin(false)
    }
  }

  const handleApproval = async (id: string) => {
    console.log('审批操作', id)
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
          <DeleteConfirm 
            onConfirm={handleBatchDelete}
            title="确认失效选中的数据？"
          >
            <Button type="primary" disabled={noneSelected} danger>
              失效
            </Button>
          </DeleteConfirm>
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
          <DataTableFilterItem label="用户名" name="name">
            <Input placeholder="请输入" allowClear={true} />
          </DataTableFilterItem>
          <DataTableFilterItem label="手机号" name="phone">
            <Input placeholder="请输入" allowClear={true} />
          </DataTableFilterItem>
          <DataTableFilterItem label="狀態" name="status">
            <Select
              options={statusEnumOptions}
              className="w-full"
              placeholder="请选择"
              allowClear={true}
            />
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
          editId={editModal.editId}
          form={addForm}
          onFinish={handleSubmit}
        />
      </Modal>
    </div>
  )
}

export default UserList
