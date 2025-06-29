import { createGetOptionTextFn } from '@/utils'

export enum ReceivingReviewType {
  REVIEW = 'REVIEW',
  NO_REVIEW = 'NO_REVIEW',
}

export const useReceivingReviewTypeHelpers = () => {
  const receivingReviewTypeEnumOptions = [
    { value: ReceivingReviewType.REVIEW, label: '需檢閱' },
    { value: ReceivingReviewType.NO_REVIEW, label: '無需檢閱' },
  ]
  const getReceivingReviewTypeText = createGetOptionTextFn(
    receivingReviewTypeEnumOptions
  )
  return { receivingReviewTypeEnumOptions, getReceivingReviewTypeText }
}
