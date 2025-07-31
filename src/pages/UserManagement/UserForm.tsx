import { Col, Form, Input, Row } from 'antd'
import type { FormProps } from 'antd'
import TextArea from 'antd/es/input/TextArea'

function UserForm({
  ...formProps
}: FormProps & {}) {

  return (
    <Form layout="vertical" {...formProps}>
      <Row gutter={24}>
        <Col span={24}>
          <Form.Item name="userName" label="用户名" rules={[{ required: true }]}>
            <Input allowClear showCount maxLength={50} placeholder="請輸入" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            name="userPhone"
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
