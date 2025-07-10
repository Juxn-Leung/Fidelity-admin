import { Col, Form, Input, Row, Image, Space, Button } from 'antd'
import type { FormProps, GetProp, UploadProps } from 'antd'
import { useEffect, useState } from 'react'
import { useFileUpload } from '@/hooks/useFileUpload.ts'
import useMessage from '@/components/MessageContent/useMessage'
import useSpin from '@/components/SpinContent/useSpin'
import ConfigureSystemHardwareAPI from '@/apis/ConfigureSystemHardwareAPI'
import TextArea from 'antd/es/input/TextArea'
import { PlusOutlined } from '@ant-design/icons'

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0]

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })

function BackgroundForm({
  editId,
  ...formProps
}: FormProps & {
  editId: string | null
}) {
  const { msg } = useMessage()
  const { toggleSpin } = useSpin()
  const { openFileDialog } = useFileUpload()

  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')

  const image = Form.useWatch('image', formProps.form)

  const handlePreview = async () => {
    setPreviewImage(image)
    setPreviewOpen(true)
  }

  const handleDelete = () => {
    if (formProps?.form) {
      formProps.form.setFieldsValue({
        image: '',
      })
    }
    setPreviewImage('')
    setPreviewOpen(false)
  }

  const handleUpload = async () => {
    try {
      toggleSpin(true)
      const file = await openFileDialog({
        accept: '.jpg,.jpeg,.png',
        maxSize: 10240, // 最大10MB
        multiple: false,
      })
      const url = await getBase64(file as FileType)
      if (formProps?.form) {
        formProps.form.setFieldsValue({
          image: url,
        })
      }
    } catch (error) {
      msg.$error(error)
      return
    } finally {
      toggleSpin(false)
    }
  }

  const getInfo = async (id: string) => {
    toggleSpin(true)
    try {
      // const data = await ConfigureSystemHardwareAPI.getById(id)
      const data = {
        id: '1',
        name: '用户1',
        image:
          'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        status: '启用',
        remark: '这是一个备注',
        modifiedBy: '管理员',
        modifiedTime: new Date().toISOString(),
      }
      if (formProps?.form) {
        formProps.form.setFieldsValue({
          name: data.name,
          image: data.image,
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
    <>
      <Form layout="vertical" {...formProps}>
        <Row gutter={24}>
          <Col span={24}>
            <Form.Item
              name="name"
              label="图片名称"
              rules={[{ required: true }]}
            >
              <Input allowClear showCount maxLength={6} placeholder="請輸入" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="image"
              label="图片上传"
              rules={[{ required: true, message: '请上传图片' }]}
            >
              {image ? (
                <Space size={16}>
                  <img 
                    src={image} 
                    style={{ width: 108, height: 192, objectFit: 'cover' }}
                  />
                  <Button type='primary' onClick={handlePreview}>预览</Button>
                  <Button danger onClick={handleDelete}>删除</Button>
                </Space>
              ) : (
                <button
                  style={{ border: 0, background: 'none' }}
                  type="button"
                  onClick={handleUpload}
                >
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>上传图片</div>
                </button>
              )}
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="remark" label="备注">
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
