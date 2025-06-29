import { createGetOptionTextFn } from '@/utils'

export enum SendingStatus {
  DRAFT = 'DRAFT',
  SENDING = 'SENDING',
  SENDING_DONE = 'SENDING_DONE',
}

export const useSendingStatusHelpers = () => {
  const sendingStatusEnumOptions = [
    { value: SendingStatus.DRAFT, label: '草擬中' },
    { value: SendingStatus.SENDING, label: '待發出' },
    { value: SendingStatus.SENDING_DONE, label: '已發出' },
  ]
  const getSendingStatusText = createGetOptionTextFn(sendingStatusEnumOptions)
  return { sendingStatusEnumOptions, getSendingStatusText }
}
