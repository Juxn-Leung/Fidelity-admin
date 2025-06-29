import { createGetOptionTextFn } from '@/utils'

export enum ReceiverType {
  LEGAL_AFFAIRS = 'LEGAL_AFFAIRS',
  OTHER = 'OTHER',
}

export const useReceiverTypeHelpers = () => {
  const receiverTypeEnumOptions = [
    { value: ReceiverType.LEGAL_AFFAIRS, label: '法務局' },
    { value: ReceiverType.OTHER, label: '其他' },
  ]
  const getReceiverTypeText = createGetOptionTextFn(receiverTypeEnumOptions)
  return { receiverTypeEnumOptions, getReceiverTypeText }
}
