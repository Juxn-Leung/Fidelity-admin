import React from 'react'
import {
  Card,
  TableColumnsType,
  Select,
  Form,
  DatePicker,
} from 'antd'
import AppBreadcrumb from '@/components/AppBreadcrumb/AppBreadcrumb'
import DataTable from '@/components/DataTable'
import useMessage from '@/components/MessageContent/useMessage'
import { getListQuery } from '@/utils'
import DataTableFilter from '@/components/DataTableFilter'
import DataTableFilterItem from '@/components/DataTableFilter/DataTableFilterItem'
import {
  GetTableDataFn,
  useAntdDataTable,
  useAntdDataTableSelections,
} from '@/hooks/dataTable'
import dayjs from 'dayjs'
import LogAPI from '@/apis/LogAPI'
import { useStatusHelpers } from '@/enums/statusEnum'
const { RangePicker } = DatePicker

const UserList: React.FC = () => {
  const { msg } = useMessage()
  const { statusEnumOptions } = useStatusHelpers()

  const columns: TableColumnsType<any> = [
    {
      title: '开始时间',
      dataIndex: 'createDate',
      render: (text: any) => text && dayjs(text).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: '操作节点',
      dataIndex: 'apiName',
    },
    {
      title: '操作',
      dataIndex: 'operation',
    },
    {
      title: 'ip 地址',
      dataIndex: 'ip',
    },
  ]

  const getTableData: GetTableDataFn = async (params, formData) => {
    try {
      const listQuery = getListQuery(params)
      const { data } = await LogAPI.find({
        ...listQuery,
        ...formData,
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
  const { data, tableProps, search } = useAntdDataTable(getTableData, {
    form,
  })
  const { reset, submit } = search

  const { rowSelection, clearAll } =
    useAntdDataTableSelections(data?.list || [])

  const deleteDate = (e: any, formItem: string) => {
    const { key } = e
    if (['Backspace', 'Delete'].includes(key)) {
      form.setFieldValue(formItem, null)
    }
  }

  return (
    <div className="page-content">
      <AppBreadcrumb
        breadcrumbList={[{ title: '用户管理' }]}
      >
      </AppBreadcrumb>

      <Card 
        className="page-card"
      >
        <DataTableFilter form={form} onReset={reset} onSubmit={submit}>
          <DataTableFilterItem label="日期范围" name="startDate">
            <RangePicker
              className="w-full"
              onKeyDown={(e) => deleteDate(e, 'startDate')}
            />
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
