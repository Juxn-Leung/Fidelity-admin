import { Col, Form, Input, Row } from 'antd'
import type { FormProps } from 'antd'
import { useEffect } from 'react'
import useMessage from '@/components/MessageContent/useMessage'
import useSpin from '@/components/SpinContent/useSpin'
import ConfigureSystemHardwareAPI from '@/apis/ConfigureSystemHardwareAPI'
import TextArea from 'antd/es/input/TextArea'

function UserForm({
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
      // const data = await ConfigureSystemHardwareAPI.getById(id)
      const data = {
        name: '张三',
        phone: '13800138000',
        remark: '这是一个备注信息',
      }
      if (formProps?.form) {
        formProps.form.setFieldsValue({
          name: data.name,
          phone: data.phone,
          remark: data.remark,
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
          <Form.Item name="name" label="用户名" rules={[{ required: true }]}>
            <Input allowClear showCount maxLength={50} placeholder="請輸入" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            name="phone"
            label="手机号"
            rules={[
              { required: true, message: '请输入手机号' },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '请输入有效的手机号',
              },
            ]}
            >
            <Input allowClear showCount maxLength={11} placeholder="请输入" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            name="remark"
            label="备注"
          >
            <TextArea
              showCount
              maxLength={100}
              placeholder="请输入"
              style={{ height: 120, resize: 'none' }}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}
export default UserForm
