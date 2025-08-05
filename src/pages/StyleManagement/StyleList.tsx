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
import PatternAPI from '@/apis/PatternAPI'
import { useStatusHelpers } from '@/enums/statusEnum'

const UserList: React.FC = () => {
  const { msg } = useMessage()
  const { toggleSpin } = useSpin()
  const navigate = useNavigate()

  const { statusEnumOptions } = useStatusHelpers()

  const handleChangeStatus = async (id: string, userStatus: number) => {
    try {
      toggleSpin(true)
      await PatternAPI.picStatusAudit({
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

  const columns: TableColumnsType<any> = [
    {
      title: '款式名称',
      dataIndex: 'patternName',
    },
    {
      title: '状态',
      dataIndex: 'patternStatus',
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
          <Button color="primary" variant="outlined" onClick={() => {
            navigate(`/style/detail/${record?.id}`)
          }}>
            修改
          </Button>
          <DeleteConfirm
            title="确认生效该数据？"
            onConfirm={() => {
              handleChangeStatus(record.id, 1)
            }}
          >
            <Button variant="outlined" style={{ color: '#13A07B', borderColor: '#13A07B' }}>
              生效
            </Button> 
          </DeleteConfirm>
          <DeleteConfirm
            title="确认失效该数据？"
            onConfirm={() => {
              handleChangeStatus(record.id, 2)
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
      const { data } = await PatternAPI.find({
        ...listQuery,
        ...formData,
      })
      const totalElements = data.total
      return {
        list: data.records,
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

  const { rowSelection, clearAll } =
    useAntdDataTableSelections(data?.list || [])

  return (
    <div className="page-content">
      <AppBreadcrumb
        breadcrumbList={[{ title: '背景图管理' }]}
      >
        <Space>
          <Button
            type="primary"  
            onClick={() => {
              navigate(`/style/detail`)
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
          <DataTableFilterItem label="款式名称" name="patternName">
            <Input placeholder="请输入" allowClear={true} />
          </DataTableFilterItem>
          <DataTableFilterItem label="状态" name="patternStatus">
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
