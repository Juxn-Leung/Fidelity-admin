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
import EquipmentForm from './EquipmentForm'
import EquipmentUser from './EquipmentUser'
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

const EquipmentList: React.FC = () => {
  const { msg } = useMessage()
  const { toggleSpin } = useSpin()

  const [addForm] = Form.useForm()
  const editModal = useAntdEditModal({
    title: {
      add: '新增硬件配置',
      edit: '編輯硬件配置',
    },
  })

  const userModal = useAntdEditModal({
    title: {
      add: '用戶管理',
      edit: '用戶管理',
    },
  })
  const { statusEnumOptions } = useStatusHelpers()

  const columns: TableColumnsType<any> = [
    {
      title: 'IP地址',
      dataIndex: 'ip',
      sorter: true,
    },
    {
      title: '名稱',
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: '最後修改人',
      dataIndex: 'modifiedBy',
      sorter: true,
    },
    {
      title: '修改時間',
      dataIndex: 'modifiedTime',
      sorter: true,
      render: (text: any) => text && dayjs(text).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: '狀態',
      dataIndex: 'status',
      sorter: true,
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
        </Space>
      ),
    },
  ]

  const getTableData: GetTableDataFn = async (params, formData) => {
    try {
      const listQuery = getListQuery(params)
      const { content, totalElements } = await ConfigureSystemHardwareAPI.find({
        ...listQuery,
        ...formData,
      })
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

  const handleSubmitUser = async (data: any) => {
    console.log('handleSubmitUser', data)
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

  const handleStatusSwitch = async (type: string) => {
    try {
      toggleSpin(true)
      if (type === 'enable') {
        await ConfigureSystemHardwareAPI.batchEnable(selectedRowKeys)
      } else if (type === 'disable') {
        await ConfigureSystemHardwareAPI.batchDisable(selectedRowKeys)
      }
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
      <AppBreadcrumb
        breadcrumbList={[{ title: '基礎數據配置' }, { title: '設備配置' }]}
      >
        <Space>
          <Button
            type="primary"
            disabled={noneSelected}
            onClick={() => {
              handleStatusSwitch('enable')
            }}
          >
            生效
          </Button>
          <Button
            disabled={noneSelected}
            onClick={() => {
              handleStatusSwitch('disable')
            }}
          >
            失效
          </Button>
          <DeleteConfirm onConfirm={handleBatchDelete}>
            <Button type="primary" disabled={noneSelected} danger>
              刪除
            </Button>
          </DeleteConfirm>
          <Button
            type="primary"
            onClick={() => {
              addForm.resetFields()
              editModal.open(null)
            }}
          >
            新增
          </Button>
        </Space>
      </AppBreadcrumb>

      <Card className="page-card">
        <DataTableFilter form={form} onReset={reset} onSubmit={submit}>
          <DataTableFilterItem label="名稱" name="name">
            <Input placeholder="請輸入" allowClear={true} />
          </DataTableFilterItem>
          <DataTableFilterItem label="狀態" name="status">
            <Select
              options={statusEnumOptions}
              className="w-full"
              placeholder="請選擇"
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
        destroyOnClose={true}
        confirmLoading={confirmLoading}
        onOk={() => addForm.submit()}
        onCancel={() => {
          addForm.resetFields()
          editModal.close()
        }}
      >
        <EquipmentForm
          editId={editModal.editId}
          form={addForm}
          onFinish={handleSubmit}
        />
      </Modal>

      <Modal
        {...userModal.modalProps}
        width={600}
        maskClosable={false}
        destroyOnClose={true}
        confirmLoading={confirmLoading}
        onOk={() => addForm.submit()}
        onCancel={() => {
          addForm.resetFields()
          userModal.close()
        }}
      >
        <EquipmentUser
          editId={userModal.editId}
          form={addForm}
          onFinish={handleSubmitUser}
        />
      </Modal>
    </div>
  )
}

export default EquipmentList
