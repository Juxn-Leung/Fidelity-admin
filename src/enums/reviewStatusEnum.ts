import { createGetOptionTextFn } from '@/utils'

export enum ReviewStatus {
  DRAFT = 'DRAFT',
  SUCCESS = 'SUCCESS',
  REJECTED = 'REJECTED',
  RE_REVIEW = 'RE_REVIEW',
}

export const useReviewStatusHelpers = () => {
  const reviewStatusEnumOptions = [
    { value: ReviewStatus.DRAFT, label: '待檢閲' },
    { value: ReviewStatus.SUCCESS, label: '檢閲通過' },
    { value: ReviewStatus.REJECTED, label: '檢閲不通過' },
    { value: ReviewStatus.RE_REVIEW, label: '需重新檢閱' },
  ]
  const getReviewStatusText = createGetOptionTextFn(reviewStatusEnumOptions)
  const reviewStatusEnumOptions2 = [
    { value: ReviewStatus.DRAFT, label: '待檢閲' },
    { value: ReviewStatus.SUCCESS, label: '檢閲通過' },
    { value: ReviewStatus.REJECTED, label: '未通過' },
  ]
  const getReviewStatusText2 = createGetOptionTextFn(reviewStatusEnumOptions2)
  return {
    reviewStatusEnumOptions,
    reviewStatusEnumOptions2,
    getReviewStatusText,
    getReviewStatusText2,
  }
}
