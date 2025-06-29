import { createGetOptionTextFn } from '@/utils'

export enum StatusReview {
  DRAFT = 'DRAFT',
  SUCCESS = 'SUCCESS',
  RE_REVIEW = 'RE_REVIEW',
  REJECTED = 'REJECTED',
}

export const useStatusReviewHelpers = () => {
  const statusReviewEnumOptions = [
    { value: StatusReview.DRAFT, label: '待檢閲' },
    { value: StatusReview.SUCCESS, label: '檢閲通過' },
    { value: StatusReview.RE_REVIEW, label: '重新檢閲' },
    { value: StatusReview.REJECTED, label: '不通過' },
  ]
  const getStatusReviewText = createGetOptionTextFn(statusReviewEnumOptions)
  return { statusReviewEnumOptions, getStatusReviewText }
}
