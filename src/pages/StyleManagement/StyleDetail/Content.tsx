import { Space } from 'antd'
import PageLayout from '@/components/PageLayout'
import { useDetail } from '@/contexts/DetailContext'
import DetailCard from '@/components/DetailCard'

const SendDetail = () => {
  const {
    data: { allotInfo },
  } = useDetail()
  return (
    <PageLayout
      left={
        <Space direction="vertical" className="w-full">
          <DetailCard title={'編輯信息'}>
            111
          </DetailCard>
        </Space>
      }
      right={
        <Space direction="vertical" className="w-full">
          222
        </Space>
      }
    ></PageLayout>
  )
}

export default SendDetail
