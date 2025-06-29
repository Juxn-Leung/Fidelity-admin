import { createGetOptionTextFn } from '@/utils'

export enum RefundType {
  VOLUNTARY = 'VOLUNTARY',
  COMPULSION = 'COMPULSION',
}

export const useRefundTypeHelpers = () => {
  const refundTypeEnumOptions = [
    { value: RefundType.VOLUNTARY, label: '自願退款' },
    { value: RefundType.COMPULSION, label: '強制徵收' },
  ]
  const getRefundTypeText = createGetOptionTextFn(refundTypeEnumOptions)
  return { refundTypeEnumOptions, getRefundTypeText }
}
