import { Button, Col, Form, Input, Radio, Row, Select, Space } from 'antd'
import Marquee from 'react-fast-marquee'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import PageLayout from '@/components/PageLayout'
import { useDetail } from '@/contexts/DetailContext'
import DetailCard from '@/components/DetailCard'
import TextArea from 'antd/es/input/TextArea'
import { MutedOutlined, WifiOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import { useMemo, useRef, useState } from 'react'
import AsyncSelect from '@/components/AsyncSelect'
import JIM_w from '@/assets/images/JIM_w.jpg'
import SILVER_w from '@/assets/images/SILVER_w.jpg'
import WHITE_w from '@/assets/images/WHITE_w.jpg'


const Content = () => {
  const {
    data: { styleInfo },
  } = useDetail()

  const [form] = Form.useForm()
  const background = Form.useWatch('background', form)
  const mode = Form.useWatch('mode', form) || 'text'
  const content = Form.useWatch('content', form) || ''
  const [message, setMessage] = useState<string>('')

  const handleContentChange = (value: string) => {
    console.log('Content changed:', value)
    setMessage(value)
  }

  const [direction, setDirection] = useState<'vertical' | 'horizontal'>(
    'vertical'
  )

  // 自定义工具栏
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
    ],
  }

  const phoneStyle = useMemo(() => {
    return {
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      height: direction === 'vertical' ? '812px' : '400px',
      width: direction === 'vertical' ? '400px' : '812px',
      borderRadius: '30px',
      border: '12px solid #23221E',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      margin: '20px auto',
    }
  }, [background, direction])

  const phoneTitle = () => {
    return (
      <div className="flex items-center justify-between p-2">
        <span>{dayjs().format('HH:mm')}</span>
        <Space size={4}>
          <MutedOutlined />
          <WifiOutlined />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '12px',
              color: '#999',
              background: '#23221E',
              padding: '0 4px',
              borderRadius: '4px',
            }}
          >
            100
          </div>
        </Space>
      </div>
    )
  }

  return (
    <PageLayout
      left={
        <Space direction="vertical" className="w-full">
          <DetailCard
            title={'編輯信息'}
            styles={{
              body: {
                height: 'calc(100vh - 250px)',
                overflowY: 'auto',
                overflowX: 'hidden',
              },
            }}
          >
            <Form layout="vertical" form={form}>
              <Row gutter={24}>
                <Col span={24}>
                  <Form.Item
                    name="name"
                    label="款式名称"
                    rules={[{ required: true }]}
                  >
                    <Input
                      allowClear
                      showCount
                      maxLength={50}
                      placeholder="請輸入"
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item name="mode" label="模式">
                    <Radio.Group
                      options={[
                        { value: 'text', label: '文字展示' },
                        { value: 'notice', label: '滚动展示' },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="background" label="背景图片">
                    <Select
                      options={[
                        {
                          label: '背景图1',
                          value: JIM_w,
                        },
                        {
                          label: '背景图2',
                          value: SILVER_w,
                        },
                        {
                          label: '背景图3',
                          value: WHITE_w,
                        },
                      ]}
                      className="w-full"
                      placeholder="請選擇"
                    />
                    {/* <AsyncSelect
                      placeholder="請選擇"
                      fieldNames={{
                        label: 'nameConfigure',
                        value: 'id',
                      }}
                      fetchOptions={fetchMeetingConfigurationOptions}
                    /> */}
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item name="content" label="款式内容">
                    {mode === 'text' ? (
                      <ReactQuill
                        theme="snow"
                        value={message}
                        modules={modules}
                        placeholder="请输入款式内容"
                        style={{ height: 200, width: 375 }}
                        onChange={handleContentChange}
                      />
                    ) : (
                      <TextArea rows={4} />
                    )}
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </DetailCard>
        </Space>
      }
      right={
        <Space direction="vertical" className="w-full">
          <DetailCard
            title={
              <p>
                预览
                <span style={{ color: '#999' }}>
                  {' '}
                  （预览效果可能与实际使用略有不同）
                </span>
              </p>
            }
            styles={{
              body: {
                height: 'calc(100vh - 250px)',
                overflow: 'auto',
              },
            }}
            extra={
              <Button
                type="primary"
                size="small"
                onClick={() => {
                  setDirection(
                    direction === 'vertical' ? 'horizontal' : 'vertical'
                  )
                }}
              >
                旋转
              </Button>
            }
          >
            <div className="phone-preview relative" style={phoneStyle}>
              {phoneTitle()}

              {mode === 'text' ? (
                <div
                  dangerouslySetInnerHTML={{ __html: message }}
                  className="absolute"
                  style={{
                    padding: '16px',
                    height: '70%',
                    width: '100%',
                    top: '15%',
                    left: '0',
                    wordWrap: 'break-word',
                  }}
                ></div>
              ) : (
                <Marquee
                style={{
                    padding: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    left: '0',
                    position: 'absolute',
                  }}
                >
                  <p style={{
                    fontSize: '36px',
                    color: '#333',
                  }}>{content}</p>
                </Marquee>
              )}
            </div>
          </DetailCard>
        </Space>
      }
    ></PageLayout>
  )
}

export default Content
