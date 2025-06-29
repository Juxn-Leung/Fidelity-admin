import { useEffect } from 'react'
import { Col, Form, Row, Select } from 'antd'
import type { FormProps } from 'antd'
import useMessage from '@/components/MessageContent/useMessage'
import useSpin from '@/components/SpinContent/useSpin'
import ConfigureSystemHardwareUserAPI from '@/apis/ConfigureSystemHardwareUserAPI'

function EquipmentUser({
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
      const data = await ConfigureSystemHardwareUserAPI.find({
        configureSystemHardwareId: id,
      })
      console.log(data)
      if (formProps?.form) {
        formProps?.form?.setFieldsValue({
          userIds: data.map((item: any) => item.user?.id),
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
          <Form.Item name="userIds">
            <Select
              placeholder="用戶"
              options={[]}
              mode="multiple"
              fieldNames={{
                label: 'username',
                value: 'id',
              }}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}
export default EquipmentUser
