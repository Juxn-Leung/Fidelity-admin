import { createGetOptionTextFn } from '@/utils'

export enum SendingReviewStatus {
  DRAFT = 'DRAFT',
  SUCCESS = 'SUCCESS',
  RE_REVIEW = 'RE_REVIEW',
  REJECTED = 'REJECTED',
}

export const useSendingReviewStatusHelpers = () => {
  const sendingReviewStatusEnumOptions = [
    { value: SendingReviewStatus.DRAFT, label: '待檢閲' },
    { value: SendingReviewStatus.SUCCESS, label: '檢閲通過' },
    { value: SendingReviewStatus.RE_REVIEW, label: '重新檢閱' },
    { value: SendingReviewStatus.REJECTED, label: '不通過' },
  ]
  const getSendingReviewStatusText = createGetOptionTextFn(
    sendingReviewStatusEnumOptions
  )
  return { sendingReviewStatusEnumOptions, getSendingReviewStatusText }
}
