import React from 'react'
import { withDetailProvider } from '@/contexts/DetailContext'
import PatternAPI from '@/apis/PatternAPI'
import Toolbar from './Toolbar.tsx'
import Content from './Content.tsx'
import { Flex } from 'antd'

const fetchDetail = async (id?: string) => {
  if (!id) return {
    styleInfo: null,
  }
  const styleInfo = await PatternAPI.one(id)
  console.log('styleInfo', styleInfo)
  return {
    // allotInfo,
    styleInfo: {
      id: '123',
      name: 'Sample Style',
      status: 'active',
      remark: 'This is a sample style remark.',
      background: 'https://example.com/background.jpg',
      music: '',
      content: '',
      modifiedBy: 'admin',
      modifiedTime: '2023-10-01T12:00:00Z',
    }
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
  'id'
)

export default AllotDetail
