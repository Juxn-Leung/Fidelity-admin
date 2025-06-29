import React, {
  forwardRef,
  useEffect,
  useState,
  useImperativeHandle,
} from 'react'
import { Card, TableColumnsType } from 'antd'
import DataTable from '@/components/DataTable/DataTable'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
import DataAPI from '@/apis/DataAPI'

interface FormProps {
  onSubmit: (data: any) => void
}

interface PageProps {
  pageNum: number
  pageSize: number
  total: number
}
export interface FormHandle {
  submit: () => void
}

const AgentList = forwardRef<FormHandle, FormProps>((props, ref) => {
  const { onSubmit } = props
  const [data, setData] = useState<any[]>([])
  const [selectKeys, setSelectKeys] = useState<string[]>([])
  const [pageProps, setPageProps] = useState<PageProps>({
    pageNum: 1,
    pageSize: 10,
    total: 0,
  })

  useImperativeHandle(ref, () => {
    return {
      submit: handleSubmit,
    }
  })

  const columns: TableColumnsType<any> = [
    {
      title: '名稱',
      dataIndex: 'localizedName',
      key: 'localizedName',
      width: 140,
      render: (_text, record) => <span>{record?.nameTc}</span>,
    },
    {
      title: '代理人名稱(中文)',
      dataIndex: 'nameTc',
      key: 'nameTc',
      width: 140,
      render: (_text, record) => <span>{record.agentInformation?.nameTc}</span>,
    },
    {
      title: '代理人名稱(外文)',
      dataIndex: 'namePt',
      key: 'namePt',
      width: 140,
      render: (_text, record) => <span>{record.agentInformation?.namePt}</span>,
    },
    {
      title: '代理人的執業狀況',
      dataIndex: 'lawyerCode',
      key: 'lawyerCode',
      width: 160,
      render: (_text, record) => (
        <span>
          {record.agentWorkStatus?.agentWorkStatusType?.localizedName}
        </span>
      ),
    },
    {
      title: '代理人編號',
      dataIndex: 'lawyerCode',
      key: 'lawyerCode',
      width: 160,
      render: (_text, record) => (
        <span>{record.lawyerCode || record.lawyerInternCode}</span>
      ),
    },
    {
      title: '可否參與必要仲裁',
      dataIndex: 'participateArbitration',
      key: 'participateArbitration',
      width: 160,
      render: (_text, record) => (
        <span>
          {!record.agentInformation
            ? ''
            : record.agentInformation?.involvedArbitration
              ? '是'
              : '否'}
        </span>
      ),
    },
    {
      title: '性別',
      dataIndex: 'gender',
      key: 'gender',
      width: 140,
      render: (_, record) => (
        <span>
          {format(
            'gender',
            record.agentInformation ? record.agentInformation : record
          )}
        </span>
      ),
    },
    {
      title: '律師樓',
      dataIndex: 'lawOffice',
      key: 'lawOffice',
      width: 160,
      render: (_text, record) => (
        <span>
          {!record.agentInformation
            ? ''
            : record?.agentInformation?.lawFirm?.localizedName}
        </span>
      ),
    },
    {
      title: '基本資料有效日期(開始)',
      dataIndex: 'effectStartDate',
      key: 'effectStartDate',
      width: 200,
      render: (_, record) => (
        <span>{record.agentInformation?.effectStartDate}</span>
      ),
    },
    {
      title: '狀態',
      dataIndex: 'status',
      key: 'status',
      width: 80,
      fixed: 'right',
      align: 'center',
      render: (_, record) => <span>{format('status', record)} </span>,
    },
  ]

  const { statusList, sexList } = useSelector((store: any) => store.app)
  const format = (type: string, row: any) => {
    switch (type) {
      case 'status':
        return (
          statusList.find((item: any) => item.id === row[type])?.nameTc || ''
        )
      case 'gender':
        return sexList.find((item: any) => item.id === row[type])?.nameTc || ''
      case 'createdTime':
        return dayjs(row[type]).format('YYYY-MM-DD')
      default:
        return ''
    }
  }

  const pageChange = (current: number) => {
    setPageProps({
      ...pageProps,
      pageNum: current,
    })
  }

  const pageSizeChange = (current: number, size: number) => {
    setPageProps({
      ...pageProps,
      pageNum: current,
      pageSize: size,
    })
  }

  const handleSubmit = () => {
    onSubmit &&
      onSubmit(
        data.find((item: any) => {
          return item.id === selectKeys[0]
        })
      )
  }

  const getList = async () => {
    try {
      const respond = await DataAPI.agentSearch({
        page: pageProps.pageNum - 1,
        size: pageProps.pageSize,
      })
      // console.log('respond', respond.content);
      setData(respond.content)

      setPageProps({
        ...pageProps,
        total: respond.totalElements,
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getList()
  }, [pageProps.pageNum, pageProps.pageSize])

  const selectChange = (selectedRowKeys: React.Key[]) => {
    setSelectKeys(selectedRowKeys as string[])
    console.log('selectedRowKeys', selectKeys)
  }

  return (
    <div className="page-detail">
      <Card className="page-card">
        <DataTable
          columns={columns}
          data={data}
          pageProps={pageProps}
          handlePageChange={pageChange}
          handlePageSizeChange={pageSizeChange}
          isShowSelect
          handleSelectChange={selectChange}
          radioSelect
        />
      </Card>
    </div>
  )
})

export default AgentList
