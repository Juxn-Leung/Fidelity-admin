import { Col, Form, Input, Row, Image, Space, Button } from 'antd'
import type { FormProps, GetProp, UploadProps } from 'antd'
import { useState } from 'react'
import { useFileUpload } from '@/hooks/useFileUpload.ts'
import useMessage from '@/components/MessageContent/useMessage'
import useSpin from '@/components/SpinContent/useSpin'
import FileAPI from '@/apis/FileAPI'
import TextArea from 'antd/es/input/TextArea'
import { PlusOutlined } from '@ant-design/icons'
import { formatPicUrl } from '@/utils/format'

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0]

// const getBase64 = (file: FileType): Promise<string> =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader()
//     reader.readAsDataURL(file)
//     reader.onload = () => resolve(reader.result as string)
//     reader.onerror = (error) => reject(error)
//   })

function BackgroundForm({
  ...formProps
}: FormProps & {}) {
  const { msg } = useMessage()
  const { toggleSpin } = useSpin()
  const { openFileDialog } = useFileUpload()

  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')

  const picId = Form.useWatch('picId', formProps.form)

  const handlePreview = async () => {

    setPreviewImage(formatPicUrl(picId))
    setPreviewOpen(true)
  }

  const handleDelete = () => {
    if (formProps?.form) {
      formProps.form.setFieldsValue({
        picId: '',
      })
    }
    setPreviewImage('')
    setPreviewOpen(false)
  }

  const handleUpload = async () => {
    try {
      const file = await openFileDialog({
        accept: '.jpg,.jpeg,.png',
        maxSize: 10240, // 最大10MB
        multiple: false,
      })
      console.log('上传的文件', file)
      toggleSpin(true)
      const formData = new FormData()
      formData.append('file', file as FileType)
      const {data} = await FileAPI.upload(formData as any)
      console.log('上传结果', data)
      if (formProps?.form) {
        formProps.form.setFieldsValue({
          picId: data,
        })
      }
    } catch (error) {
      msg.$error(error)
      return
    } finally {
      toggleSpin(false)
    }
  }

  return (
    <>
      <Form layout="vertical" {...formProps}>
        <Row gutter={24}>
          <Col span={24}>
            <Form.Item
              name="picName"
              label="图片名称"
              rules={[{ required: true }]}
            >
              <Input allowClear showCount maxLength={6} placeholder="請輸入" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="picId"
              label="图片上传"
              rules={[{ required: true, message: '请上传图片' }]}
            >
              {picId ? (
                <Space size={16}>
                  <img 
                    src={formatPicUrl(picId)} 
                    style={{ width: 108, height: 192, objectFit: 'cover' }}
                  />
                  <Button type='primary' onClick={handlePreview}>预览</Button>
                  <Button danger onClick={handleDelete}>删除</Button>
                </Space>
              ) : (
                <div style={{ textAlign: 'center', padding: 20, borderRadius: 8, border: '1px dashed #d9d9d9'  }}>
                  <button
                    style={{ border: 0, background: 'none' }}
                    type="button"
                    onClick={handleUpload}
                  >
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>上传图片</div>
                  </button>
                </div>
              )}
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="picRemark" label="备注">
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
      {previewImage && (
        <Image
          wrapperStyle={{ display: 'none' }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}
    </>
  )
}
export default BackgroundForm
