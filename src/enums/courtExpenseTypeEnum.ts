import { createGetOptionTextFn } from '@/utils'

export enum CourtExpenseType {
  LITIGATION_PRE_AMOUNT = 'LITIGATION_PRE_AMOUNT',
  LITIGATION_AMOUNT = 'LITIGATION_AMOUNT',
}

export const useCourtExpenseTypeHelpers = () => {
  const courtExpenseTypeEnumOptions = [
    { value: CourtExpenseType.LITIGATION_PRE_AMOUNT, label: '豁免支付預付金（訴訟）' },
    { value: CourtExpenseType.LITIGATION_AMOUNT, label: '豁免支付訴訟費用' },
  ]
  const getCourtExpenseTypeText = createGetOptionTextFn(
    courtExpenseTypeEnumOptions
  )
  return { courtExpenseTypeEnumOptions, getCourtExpenseTypeText }
}
