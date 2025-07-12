import React from 'react'
import {
  Card,
  TableColumnsType,
  Input,
  Button,
  Select,
  Form,
  Space,
} from 'antd'
import { useNavigate } from 'react-router'
import AppBreadcrumb from '@/components/AppBreadcrumb/AppBreadcrumb'
import DataTable from '@/components/DataTable'
import useMessage from '@/components/MessageContent/useMessage'
import useSpin from '@/components/SpinContent/useSpin'
import { getListQuery } from '@/utils'
import DataTableFilter from '@/components/DataTableFilter'
import DataTableFilterItem from '@/components/DataTableFilter/DataTableFilterItem'
import {
  GetTableDataFn,
  useAntdDataTable,
  useAntdDataTableSelections,
} from '@/hooks/dataTable'
import dayjs from 'dayjs'
import DeleteConfirm from '@/components/DeleteConfirm'
import ConfigureSystemHardwareAPI from '@/apis/ConfigureSystemHardwareAPI'
import { useStatusHelpers } from '@/enums/statusEnum'

const UserList: React.FC = () => {
  const { msg } = useMessage()
  const { toggleSpin } = useSpin()
  const navigate = useNavigate()

  const { statusEnumOptions } = useStatusHelpers()

  const columns: TableColumnsType<any> = [
    {
      title: '款式名称',
      dataIndex: 'name',
    },
    {
      title: '状态',
      dataIndex: 'status',
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
      width: 180,
      render: (_, record) => (
        <Space>
          <Button color="primary" variant="outlined" onClick={() => {
            navigate(`/style/${record?.id}`)
          }}>
            修改
          </Button>
          <DeleteConfirm
            title="确认失效该数据？"
            onConfirm={() => {
              handleDelete([record.id])
            }}
          >
            <Button variant="outlined" danger>
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
          name: '欢迎款式',          
          status: '启用',
          modifiedBy: '管理员',
          modifiedTime: new Date().toISOString(),
        },
        {
          id: '2',
          name: '求婚款式',
          status: '禁用',
          modifiedBy: '管理员',
          modifiedTime: new Date().toISOString(),
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

  return (
    <div className="page-content">
      <AppBreadcrumb
        breadcrumbList={[{ title: '背景图管理' }]}
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
              
            }}
          >
            新增款式
          </Button>
        </Space>
      </AppBreadcrumb>

      <Card 
        className="page-card"
      >
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
    </div>
  )
}

export default UserList
