import React from 'react'
import { withDetailProvider } from '@/contexts/DetailContext'
// import UniversalReceivingDistributionAPI from '@/apis/UniversalReceivingDistributionAPI'
import Toolbar from './Toolbar.tsx'
import Content from './Content.tsx'
import { Flex } from 'antd'

const fetchDetail = async (id?: string) => {
  if (!id) return
  // const allotInfo = await UniversalReceivingDistributionAPI.getById(id)
  return {
    // allotInfo,
  }
}
const AllotDetail: React.FC = withDetailProvider(
  () => {
    return (
      <Flex vertical style={{ height: 'calc(100vh - 60px)' }}>
        <Toolbar></Toolbar>
        <div className="flex-1 overflow-hidden">
          <Content />
        </div>
      </Flex>
    )
  },
  fetchDetail,
  'allotId'
)

export default AllotDetail
