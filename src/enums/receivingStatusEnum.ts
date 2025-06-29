import { createGetOptionTextFn } from '@/utils'

export enum ReceivingStatus {
  RECEIVING = 'RECEIVING',
  HANDLING = 'HANDLING',
  HANDLED = 'HANDLED',
}

export const useReceivingStatusHelpers = () => {
  const receivingStatusEnumOptions = [
    { value: ReceivingStatus.RECEIVING, label: '待接收' },
    { value: ReceivingStatus.HANDLING, label: '待處理' },
    { value: ReceivingStatus.HANDLED, label: '已處理' },
  ]
  const getReceivingStatusText = createGetOptionTextFn(
    receivingStatusEnumOptions
  )
  return { receivingStatusEnumOptions, getReceivingStatusText }
}
