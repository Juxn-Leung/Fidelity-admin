import useMessage from '@/components/MessageContent/useMessage'
import useSpin from '@/components/SpinContent/useSpin'
import { Button, Divider, Form, Input, Typography } from 'antd'
import { useNavigate } from 'react-router'

const PhoneVerification = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const { msg } = useMessage()
  const { toggleSpin } = useSpin()

  const onSubmit = async () => {
    toggleSpin(true)
    try {
      const values = form.getFieldsValue()
      // 模拟登录请求
      if (values.username === 'admin' && values.password === '123456') {
        msg.success('登录成功')
        navigate('/home')
      } else {
        msg.$error('账号或密码错误')
      }
    } catch (error) {
      msg.$error(error)
    } finally {
      toggleSpin(false)
    }
  }

  const username = Form.useWatch('username', form)
  const password = Form.useWatch('password', form)

  return (
    <div
      style={{
        backgroundColor: '#FEFAEF',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: 500,
          margin: '200px auto',
        }}
      >
        <Typography.Title style={{ textAlign: 'center' }} level={2}>
          欢迎登录管理系统
        </Typography.Title>
        <Divider></Divider>
        <Form labelCol={{ span: 6 }} form={form} onFinish={onSubmit}>
          <Form.Item
            name={'username'}
            label="账号"
            rules={[{ required: true, message: '请输入账号' }]}
          >
            <Input></Input>
          </Form.Item>
          <Form.Item
            name={'password'}
            label="密码"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input></Input>
          </Form.Item>
          <Form.Item label={null}>
            <Button
              className='w-full'
              type="primary"
              htmlType="submit"
              disabled={!username || !password}
            >
              登入
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
export default PhoneVerification
