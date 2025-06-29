import React, { useEffect, useMemo, useState } from 'react'
import { Button, Collapse, CollapseProps, Descriptions, Space } from 'antd'
import dayjs from 'dayjs'
import StatusRenderer from '@/components/TableColumnRenderer/StatusRenderer'
import MainFileOperations from '@/components/MainFileOperations/MainFileOperations'
import ApplicationDossierKey from '@/apis/ApplicationDossierKeyAPI'
import useSpin from '@/components/SpinContent/useSpin'
import useMessage from '@/components/MessageContent/useMessage'
import { watermarkPdf } from '@/utils/file'

interface FormProps {
  applicationId: string
  formData?: any
  file: File
  fileId: string
}
interface DataForm {
  fileName: string
  fileSize: string
  status: string
  createTime: string
  applicationDossierKeyId: string
}

const FileViewForm: React.FC<FormProps> = (props) => {
  const { applicationId, formData, fileId } = props
  const [dataForm, setDataForm] = useState<DataForm>({
    fileName: '',
    fileSize: '',
    status: '',
    createTime: '',
    applicationDossierKeyId: '',
  })

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: '基本信息',
      children: (
        <BaseForm
          dataForm={dataForm}
          applicationId={applicationId}
          fileId={fileId}
        />
      ),
    },
  ]

  useEffect(() => {
    if (formData?.id) {
      setDataForm({
        fileName: formData?.fileInfo?.filename,
        fileSize:
          formData?.fileInfo?.fileSize &&
          Math.ceil(formData?.fileInfo?.fileSize / 1024) + ' KB',
        createTime:
          formData?.createdTime &&
          dayjs(formData?.createdTime).format('YYYY-MM-DD HH:mm:ss'),
        status: formData?.status,
        applicationDossierKeyId: formData?.applicationDossierKeyId,
      })
    }
  }, [formData])

  return (
    <div className="page-form" style={{ margin: -16 }}>
      <Collapse
        className="bg-white"
        items={items}
        bordered={false}
        defaultActiveKey={['1', '2', '3']}
      />
    </div>
  )
}

function BaseForm({
  dataForm,
  fileId,
  applicationId,
}: {
  dataForm: DataForm
  fileId: string
  applicationId: string
}) {
  const { msg } = useMessage()
  const { toggleSpin } = useSpin()
  const [mainFile, setMainFile] = useState<any>()
  const [mainOpen, setMainOpen] = useState({
    open: false,
    isEdit: false,
    editId: '',
  })
  const messageItems = useMemo(() => {
    return [
      {
        key: 'addingType',
        label: '文件名稱',
        children: dataForm.fileName,
        span: 4,
      },
      {
        key: 'applicationParentId',
        label: '文件大小',
        children: dataForm.fileSize,
        span: 4,
      },
      {
        key: 'status',
        label: '狀態',
        children: StatusRenderer(dataForm.status),
        span: 4,
      },
      {
        key: 'createTime',
        label: '創建時間',
        children: dayjs(dataForm.createTime).format('YYYY-MM-DD HH:mm:ss'),
        span: 4,
      },
      {
        key: 'sourceType',
        label: '卷宗要點',
        children: dataForm?.applicationDossierKeyId ? (
          <Space>
            <Button
              type="primary"
              size="small"
              onClick={() => {
                handleGetMainFile(dataForm?.applicationDossierKeyId)
              }}
            >
              要點文件
            </Button>
          </Space>
        ) : (
          <>暫無</>
        ),
        span: 4,
      },
    ]
  }, [dataForm])

  const handleGetMainFile = async (id: string) => {
    toggleSpin(true)
    try {
      const file = await ApplicationDossierKey.download(id)
      const pdfBytes = await watermarkPdf(file)
      const blob = new Blob([pdfBytes as Uint8Array], {
        type: 'application/pdf',
      })
      if (blob) {
        setMainFile(blob)
        setMainOpen({
          open: true,
          isEdit: false,
          editId: '',
        })
      }
    } catch (error) {
      msg.$error(error)
    } finally {
      toggleSpin(false)
    }
  }

  return (
    <>
      <Descriptions
        colon={false}
        labelStyle={{ paddingRight: 8 }}
        contentStyle={{ paddingLeft: 8, textAlign: 'right', display: 'block' }}
        items={messageItems}
      />

      <MainFileOperations
        file={mainFile}
        editId={mainOpen.editId}
        fileId={fileId}
        applicationId={applicationId}
        type="APPLICATION_FILE"
        open={mainOpen.open}
        isEdit={mainOpen.isEdit}
        isOnlyView
        onClose={() =>
          setMainOpen({
            open: false,
            isEdit: false,
            editId: '',
          })
        }
      />
    </>
  )
}
export default FileViewForm
