import { createGetOptionTextFn } from '@/utils'

export enum SendingType {
  BUSINESS_RESULT_OBJECT = 'BUSINESS_RESULT_OBJECT',
  SENDING_COMMON = 'SENDING_COMMON',
  PAYMENT_NOTICE_AGENT = 'PAYMENT_NOTICE_AGENT',
  PAYMENT_NOTICE_ARBITRATION = 'PAYMENT_NOTICE_ARBITRATION',
  SENDING_ALONE = 'SENDING_ALONE',
  CONSULTATION = 'CONSULTATION',
}

export const useSendingTypeHelpers = () => {
  const sendingTypeEnumOptions = [
    { value: SendingType.BUSINESS_RESULT_OBJECT, label: '業務結果物' },
    { value: SendingType.SENDING_COMMON, label: '一般調查發件' },
    { value: SendingType.PAYMENT_NOTICE_AGENT, label: '付款通知代理人' },
    {
      value: SendingType.PAYMENT_NOTICE_ARBITRATION,
      label: '付款通知_仲裁機構',
    },
    { value: SendingType.SENDING_ALONE, label: '單獨發件' },
    { value: SendingType.CONSULTATION, label: '諮詢' },
  ]
  const getSendingTypeText = createGetOptionTextFn(sendingTypeEnumOptions)
  return { sendingTypeEnumOptions, getSendingTypeText }
}
