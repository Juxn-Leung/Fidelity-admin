import { createGetOptionTextFn } from '@/utils'

export enum PaymentReviewStatus {
  DRAFT = 'DRAFT',
  PRE_CONFIRMATION = 'PRE_CONFIRMATION',
  TO_SCHEDULED = 'TO_SCHEDULED',
  REVIEWING = 'REVIEWING',
  REVIEWED = 'REVIEWED',
}

export const usePaymentReviewStatusHelpers = () => {
  const paymentReviewStatusEnumOptions = [
    { value: PaymentReviewStatus.DRAFT, label: '待調整' },
    { value: PaymentReviewStatus.PRE_CONFIRMATION, label: '待確認' },
    { value: PaymentReviewStatus.TO_SCHEDULED, label: '待排程' },
    { value: PaymentReviewStatus.REVIEWING, label: '待評審' },
    { value: PaymentReviewStatus.REVIEWED, label: '已評審' },
  ]
  const getLitigationStageTypeText = createGetOptionTextFn(
    paymentReviewStatusEnumOptions
  )

  return { paymentReviewStatusEnumOptions, getLitigationStageTypeText }
}
