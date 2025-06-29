import { Col, Form, Input, Row } from 'antd'
import type { FormProps } from 'antd'
import { useEffect } from 'react'
import useMessage from '@/components/MessageContent/useMessage'
import useSpin from '@/components/SpinContent/useSpin'
import ConfigureSystemHardwareAPI from '@/apis/ConfigureSystemHardwareAPI'

function EquipmentForm({
  editId,
  ...formProps
}: FormProps & {
  editId: string | null
}) {
  const { msg } = useMessage()
  const { toggleSpin } = useSpin()

  const getInfo = async (id: string) => {
    toggleSpin(true)
    try {
      const data = await ConfigureSystemHardwareAPI.getById(id)
      if (formProps?.form) {
        formProps.form.setFieldsValue({
          ip: data.ip,
          name: data.name,
        })
      }
    } catch (error) {
      msg.$error(error)
    } finally {
      toggleSpin(false)
    }
  }

  useEffect(() => {
    if (editId) {
      getInfo(editId)
    }
  }, [editId])

  return (
    <Form layout="vertical" {...formProps}>
      <Row gutter={24}>
        <Col span={24}>
          <Form.Item name="ip" label="IP地址" rules={[{ required: true }]}>
            <Input allowClear showCount maxLength={100} placeholder="請輸入" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item name="name" label="名稱" rules={[{ required: true }]}>
            <Input allowClear showCount maxLength={100} placeholder="請輸入" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}
export default EquipmentForm
