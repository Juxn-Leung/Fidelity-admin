import { RightOutlined } from '@ant-design/icons'
import { Breadcrumb, Button, Dropdown, Flex, MenuProps, Space } from 'antd'
import { useDetail } from '@/contexts/DetailContext'
import useMessage from '@/components/MessageContent/useMessage'
import useSpin from '@/components/SpinContent/useSpin'
import PatternAPI from '@/apis/PatternAPI'
import { useMemo } from 'react'

const Toolbar = () => {
  const {
    data: { styleInfo },
    refresh,
  } = useDetail()
  const { msg } = useMessage()
  const { toggleSpin } = useSpin()

  const handleSubmit= async () => {
    toggleSpin(true)
    try {
      if (styleInfo?.id) {
        await PatternAPI.edit({
          id: styleInfo.id,
        })
      } else {
        await PatternAPI.add({

        })
      }
      
      msg.success('操作成功')
      refresh()
    } catch (error) {
      msg.$error(error)
    } finally {
      toggleSpin(false)
    }
  }

  return (
    <>
      <Flex
        justify="space-between"
        align="center"
        className="p-4 bg-white"
        style={{ height: 72 }}
      >
        <Breadcrumb
          separator={<RightOutlined />}
          items={[
            { title: '款式管理' },
            { title: '款式詳情' },
          ]}
        />
          <Space size={16}>
            <Button type="primary" onClick={
              () => handleSubmit()
            }>保存</Button>
            <Button color="primary" variant="outlined">返回</Button>
          </Space>
      </Flex>
    </>
  )
}

export default Toolbar
