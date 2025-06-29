import { Button, Drawer, Space, Card } from 'antd'
import {
  CloseOutlined,
  ExpandAltOutlined,
  ShrinkOutlined,
} from '@ant-design/icons'
import { useEffect, useState } from 'react'
import FileViewer from 'file-viewer'
import FileViewForm from './FileViewForm'
import useMessage from '@/components/MessageContent/useMessage'
import useSpin from '@/components/SpinContent/useSpin'
import ApplicationDossierAPI from '@/apis/ApplicationDossierAPI'
import { printPdf, watermarkPdf } from '@/utils/file'
import DeleteConfirm from '../DeleteConfirm'
function FileUpload({
  open,
  applicationId,
  fileData,
  onClose,
  onDelete,
}: {
  open: boolean
  applicationId: string
  fileData?: any
  children?: any
  onClose: () => void
  onDelete?: () => void
}) {
  const { msg } = useMessage()
  const { toggleSpin } = useSpin()
  const [drawerTitle] = useState<string>('上傳文件')
  const [file, setFile] = useState<any>()
  const [dataForm, setDataForm] = useState<any>() // 用作編輯，下載

  const print = () => {
    if (!file) return
    printPdf(file)
  }

  const handleDownloadFile = async (id: string) => {
    try {
      toggleSpin(true)
      const file = await ApplicationDossierAPI.download(id)
      console.log(file)
      if (file.type === 'application/pdf') {
        const pdfBytes = await watermarkPdf(file)
        const blob = new Blob([pdfBytes as Uint8Array], {
          type: 'application/pdf',
        })
        if (blob) {
          setFile(blob)
        }
      } else {
        setFile(file)
      }
    } catch (error) {
      msg.$error(error)
    } finally {
      toggleSpin(false)
    }
  }

  const [isShowMessage, setIsShowMessage] = useState(false)

  useEffect(() => {
    if (fileData?.id) {
      setDataForm(fileData)
      handleDownloadFile(fileData?.id)
    }
    // 組件關閉清除文件
    return () => {
      setFile(null)
    }
  }, [fileData])

  return (
    <>
      <Drawer
        open={open}
        maskClosable={false}
        onClose={onClose}
        width={1160}
        destroyOnClose={true}
        styles={{
          body: {
            padding: 0,
          },
        }}
        title={null}
        closeIcon={null}
        footer={null}
      >
        <div className="flex relative overflow-hidden h-full">
          <Card
            bordered={false}
            title={'文件預覽'}
            style={{ flex: 1, height: '100%', maxWidth: '100%' }}
            styles={{
              body: {
                height: 'calc(100% - 56px)',
                padding: 0,
                position: 'relative',
              },
            }}
            extra={
              <Space>
                <Button
                  type="text"
                  icon={
                    isShowMessage ? <ExpandAltOutlined /> : <ShrinkOutlined />
                  }
                  onClick={() => {
                    setIsShowMessage(!isShowMessage)
                  }}
                ></Button>
                <Button
                  type="text"
                  icon={<CloseOutlined />}
                  onClick={() => onClose()}
                ></Button>
              </Space>
            }
          >
            {file && <FileViewer file={file} />}
          </Card>
          {isShowMessage && (
            <Card
              bordered={false}
              title={drawerTitle}
              className="h-full flex flex-col"
              style={{ width: 380 }}
              styles={{
                body: {
                  flex: 1,
                  overflowY: 'auto',
                },
              }}
              actions={[
                <>
                  <Space className="w-full justify-end px-4">
                    <Button type="primary" onClick={print}>
                      列印
                    </Button>

                    {/* 業務詳情取消關聯個案卷宗 */}
                    {onDelete && 
                      <DeleteConfirm
                        multipleRecord={false}
                        title="確認失效該數據？"
                        onConfirm={onDelete}
                      >
                        {JSON.parse(
                          localStorage.getItem('hasSuperPermission') as string
                        )?.includes('SYSTEM_DELETE') ? (
                          <Button danger type="primary">
                            失效
                          </Button>
                        ) : (
                          <></>
                        )}
                      </DeleteConfirm>
                    }
                  </Space>
                </>,
              ]}
            >
              <FileViewForm
                formData={dataForm}
                file={file}
                fileId={fileData?.id}
                applicationId={applicationId}
              />
            </Card>
          )}
        </div>
      </Drawer>
    </>
  )
}

export default FileUpload
