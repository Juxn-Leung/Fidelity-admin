import { Button, Col, Form, Input, Radio, Row, Space } from 'antd'
import Marquee from 'react-fast-marquee'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import PageLayout from '@/components/PageLayout'
import { useDetail } from '@/contexts/DetailContext'
import DetailCard from '@/components/DetailCard'
import TextArea from 'antd/es/input/TextArea'
import { MutedOutlined, WifiOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import { useEffect, useImperativeHandle, useMemo, useState } from 'react'
import AsyncSelect from '@/components/AsyncSelect'
import { fetchPicFindOptions } from '@/services/fetchOptions'
import { formatPicUrl } from '@/utils/format'
import useMessage from '@/components/MessageContent/useMessage'
import useSpin from '@/components/SpinContent/useSpin'
import PatternAPI from '@/apis/PatternAPI'

interface FormProps {
  onRef: any
}


const Content: React.FC<FormProps> = (props) => {
  const {
    data: { styleInfo },
  } = useDetail()
  const { onRef } = props
  const { msg } = useMessage()
  const { toggleSpin } = useSpin()
  const [form] = Form.useForm()
  const patternName = Form.useWatch('patternName', form) || ''
  const backgroundId = Form.useWatch('backgroundId', form)
  const patternMode = Form.useWatch('patternMode', form) || 'text'
  const patternContent = Form.useWatch('patternContent', form) || ''
  const [message, setMessage] = useState<string>('')

  useImperativeHandle(onRef, () => {
    return {
      handleSubmit: onSubmit,
    }
  })

  const handleContentChange = (value: string) => {
    // console.log('Content changed:', value)
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
      backgroundImage: `url(${formatPicUrl(backgroundId)})`,
      backgroundSize: 'cover',
      height: direction === 'vertical' ? '812px' : '400px',
      width: direction === 'vertical' ? '400px' : '812px',
      borderRadius: '30px',
      border: '12px solid #23221E',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      margin: '20px auto',
    }
  }, [backgroundId, direction])

  const onSubmit = async () => {
    try {
      await form.validateFields()
    } catch (error) {
      msg.error('请填写必填项')
      return
    }
    toggleSpin(true)
    try {
      if (styleInfo?.id) {
        await PatternAPI.edit({
          patternName,
          patternMode,
          patternContent,
          backgroundId,
          id: styleInfo.id,
          patternStatus: 1
        })
      } else {
        await PatternAPI.add({
          patternName,
          patternMode,
          patternContent,
          backgroundId,
          patternStatus: 1
        })
      }
      msg.success('操作成功')
    } catch (error) {
      msg.$error(error)
    } finally {
      toggleSpin(false)
    }
  }

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

  useEffect(() => {
    form.setFieldsValue({
      patternName: styleInfo?.patternName || '',
      patternMode: styleInfo?.patternMode || 'text',
      backgroundId: styleInfo?.backgroundId || undefined,
      patternContent: styleInfo?.patternContent || '',
    })
  }, [styleInfo])

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
                    name="patternName"
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
                  <Form.Item name="patternMode" label="模式">
                    <Radio.Group
                      options={[
                        { value: 'text', label: '文字展示' },
                        { value: 'notice', label: '滚动展示' },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="backgroundId" label="背景图片">
                    <AsyncSelect
                      placeholder="請選擇"
                      fieldNames={{
                        label: 'picName',
                        value: 'id',
                      }}
                      fetchOptions={fetchPicFindOptions}
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item name="patternContent" label="款式内容">
                    {patternMode === 'text' ? (
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

              {patternMode === 'text' ? (
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
                  }}>{patternContent}</p>
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
