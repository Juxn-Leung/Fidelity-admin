import { createGetOptionTextFn } from '@/utils'

export enum PaymentReviewType {
  PAYMENT = 'PAYMENT',
  REFUND = 'REFUND',
  PAYMENT_REFUND = 'PAYMENT_REFUND',
}

export const usePaymentReviewTypeHelpers = () => {
  const paymentReviewTypeEnumOptions = [
    { value: PaymentReviewType.PAYMENT, label: '付款' },
    { value: PaymentReviewType.REFUND, label: '退款' },
    { value: PaymentReviewType.PAYMENT_REFUND, label: '付款及退款' },
  ]
  const getPaymentReviewTypeText = createGetOptionTextFn(
    paymentReviewTypeEnumOptions
  )
  return { paymentReviewTypeEnumOptions, getPaymentReviewTypeText }
}
