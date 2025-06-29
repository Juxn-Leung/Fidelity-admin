import { createGetOptionTextFn } from '@/utils'

export enum PaymentStatus {
  PAYMENTED = 'PAYMENTED',
  PAYMENTING = 'PAYMENTING',
  UNPAYMENT = 'UNPAYMENT',
}

export const usePaymentStatusHelpers = () => {
  const paymentStatusEnumOptions = [
    { value: PaymentStatus.PAYMENTED, label: '已付款通知' },
    { value: PaymentStatus.PAYMENTING, label: '付款通知中' },
    { value: PaymentStatus.UNPAYMENT, label: '未付款通知' },
  ]
  const getPaymentStatusText = createGetOptionTextFn(paymentStatusEnumOptions)
  return { paymentStatusEnumOptions, getPaymentStatusText }
}
