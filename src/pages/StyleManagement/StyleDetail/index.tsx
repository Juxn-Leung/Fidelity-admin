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
  const {data} = await PatternAPI.one({
    id
  })
  return {
    styleInfo: data
  }
}
const StyleDetail: React.FC = withDetailProvider(
  () => {
    const formRef = React.createRef() as any
    const onSubmit = () => {
      if (formRef.current) {
        formRef.current.handleSubmit()
      }
    }

    return (
      <Flex vertical style={{ height: 'calc(100vh - 60px)' }}>
        <Toolbar onSubmit={onSubmit}></Toolbar>
        <div className="flex-1 overflow-hidden">
          <Content onRef={formRef} />
        </div>
      </Flex>
    )
  },
  fetchDetail,
  'id'
)

export default StyleDetail
