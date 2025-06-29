import { createGetOptionTextFn } from '@/utils'

export enum SendReceive {
  ALL = 'ALL',
  RECEIVE = 'RECEIVE',
  SENDING = 'SENDING',
}

export const useSendReceiveHelpers = () => {
  const sendReceiveEnumOptions = [
    { value: SendReceive.RECEIVE, label: '收件' },
    { value: SendReceive.SENDING, label: '發件' },
    { value: SendReceive.ALL, label: '收件及發件' },
  ]
  const getSendReceiveText = createGetOptionTextFn(sendReceiveEnumOptions)
  return { sendReceiveEnumOptions, getSendReceiveText }
}
