import React, { useEffect, useRef, useState } from 'react'
import { Button, Modal, Space } from 'antd'
import FormItem from '../FormItem/FormItem'
import AgentList, { FormHandle } from './AgentList'
import { useAntdEditModal } from '@/hooks/form'

interface FormInputProps {
  value: string | number
  colProps?: any
  onSubmit: (data: any) => void
}

const FormInput: React.FC<FormInputProps> = (props) => {
  const { value, colProps = { xs: 24, sm: 24, md: 12 }, onSubmit } = props

  const selectModal = useAntdEditModal({
    title: {
      add: '代理人列表',
      edit: '代理人列表',
    },
  })

  const [inputValue, setInputValue] = useState<string | number>('')

  const formRef = useRef<FormHandle>(null)

  const handleShowSelect = () => {
    selectModal.open(null)
  }

  const handleSelect = () => {
    if (formRef && formRef?.current) {
      formRef.current.submit()
    }
    selectModal.close()
  }

  const handleSubmit = (data: any) => {
    setInputValue(data?.localizedName)
    console.log('data', data)
    onSubmit && onSubmit(data)
  }

  useEffect(() => {
    console.log('value', value)
  }, [value])

  return (
    <>
      <FormItem
        prop={{
          label: '代理人',
          name: 'id',
        }}
        colProps={colProps}
      >
        <div className="flex justify-between items-center">
          {inputValue ? (
            <span>{inputValue}</span>
          ) : (
            <span className="text-red-500">未選中</span>
          )}
          <Space>
            <Button type="primary" onClick={handleShowSelect}>
              選擇
            </Button>
          </Space>
        </div>
      </FormItem>

      <Modal
        {...selectModal.modalProps}
        width={1200}
        maskClosable={false}
        onOk={handleSelect}
      >
        <AgentList ref={formRef} onSubmit={handleSubmit} />
      </Modal>
    </>
  )
}

export default FormInput
