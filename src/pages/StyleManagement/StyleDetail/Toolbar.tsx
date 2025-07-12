import { RightOutlined } from '@ant-design/icons'
import { Breadcrumb, Button, Dropdown, Flex, MenuProps, Space } from 'antd'
import { useDetail } from '@/contexts/DetailContext'
import useMessage from '@/components/MessageContent/useMessage'
import useSpin from '@/components/SpinContent/useSpin'
// import UniversalReceivingDistributionAPI from '@/apis/UniversalReceivingDistributionAPI'
import { useMemo } from 'react'

const Toolbar = () => {
  const {
    data: { styleInfo },
    refresh,
  } = useDetail()
  const { msg } = useMessage()
  const { toggleSpin } = useSpin()

  const handleCancel = async () => {
    toggleSpin(true)
    try {
      // await UniversalReceivingDistributionAPI.cancel(id)
      msg.success('操作成功')
      refresh()
    } catch (error) {
      msg.$error(error)
    } finally {
      toggleSpin(false)
    }
  }

  const accept = async (handled: boolean) => {
    toggleSpin(true)
    try {
      // await UniversalReceivingDistributionAPI.accept({
      //   ids: [id],
      //   handled,
      // })
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
            <Button type="primary">保存</Button>
            <Button color="primary" variant="outlined">返回</Button>
          </Space>
      </Flex>
    </>
  )
}

export default Toolbar
