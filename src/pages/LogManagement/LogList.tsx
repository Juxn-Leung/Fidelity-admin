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
import { useStatusCodeHelpers } from '@/enums/statusCodeEnum'

const { RangePicker } = DatePicker

const UserList: React.FC = () => {
  const { msg } = useMessage()
  const { statusCodeEnumOptions, getStatusCodeText } = useStatusCodeHelpers()

  const columns: TableColumnsType<any> = [
    {
      title: '开始时间',
      dataIndex: 'createDate',
      render: (text: any) => text && dayjs(text).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: '状态',
      dataIndex: 'statusCode',
      width: 100,
      render: (text) => (
        <span
          className={
              text === '成功'
                ? 'text-green-500'
                : 'text-red-500'
          }
        >
          {getStatusCodeText(text)}
        </span>
      ),
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
    const { date } = formData
    const startTime = date && date[0] ? dayjs(date[0]).format('YYYY-MM-DD') : null
    const endTime = date && date[1] ? dayjs(date[1]).format('YYYY-MM-DD') : null
    try {
      const listQuery = getListQuery(params)
      const { data } = await LogAPI.find({
        ...listQuery,
        ...formData,
        startTime,
        endTime,
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
          <DataTableFilterItem colProps={{ 
            sm: 12, md: 12, lg: 10, xl: 8
           }} label="日期范围" name="date">
            <RangePicker
              className="w-full"
              onKeyDown={(e) => deleteDate(e, 'date')}
            />
          </DataTableFilterItem>
          <DataTableFilterItem label="状态" name="statusCode">
            <Select
              options={statusCodeEnumOptions}
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
