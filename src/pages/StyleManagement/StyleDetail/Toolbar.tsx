import { RightOutlined } from '@ant-design/icons'
import { Breadcrumb, Button, Dropdown, Flex, MenuProps } from 'antd'
import { useDetail } from '@/contexts/DetailContext'
import useMessage from '@/components/MessageContent/useMessage'
import useSpin from '@/components/SpinContent/useSpin'
// import UniversalReceivingDistributionAPI from '@/apis/UniversalReceivingDistributionAPI'
import { useMemo } from 'react'

const Toolbar = () => {
  const {
    data: { allotInfo: { id, receivingStatus } },
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
  
  const menu: MenuProps['items'] = [
    {
      key: '1',
      label: <span onClick={() => accept(false)}>未處理</span>,
    },
    {
      key: '2',
      label: <span onClick={() => accept(true)}>已處理</span>,
    },
  ]

  const template = useMemo(()=>{
    switch (receivingStatus) {
      case 'RECEIVING' :
        return (
          <Dropdown
            trigger={['click']}
            menu={{
              items: menu,
            }}
            placement="bottom"
          >
            <Button type="primary" disabled={status === 'ARCHIVE'}>接受分派</Button>
          </Dropdown>
        )
      case 'HANDLING' :
        return (
          <Button onClick={handleCancel}>取消接受</Button>
        )
      default :
        return null
    }
  }, [receivingStatus])

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
            { title: '收發件管理' },
            { title: '分派記錄', path: '/transceiver/allot' },
            { title: '分派詳情' },
          ]}
        />
          {template}
      </Flex>
    </>
  )
}

export default Toolbar
