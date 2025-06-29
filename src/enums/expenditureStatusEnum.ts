import { createGetOptionTextFn } from '@/utils'

export enum ExpenditureStatus {
  NEW = 'NEW',
  UNPAID_REQUESTS = 'UNPAID_REQUESTS',
}

export const useExpenditureStatusHelpers = () => {
  const expenditureStatusEnumOptions = [
    { value: ExpenditureStatus.NEW, label: '新提交' },
    { value: ExpenditureStatus.UNPAID_REQUESTS, label: '未支付的預付請求' },
  ]
  const getExpenditureStatusText = createGetOptionTextFn(
    expenditureStatusEnumOptions
  )
  return { expenditureStatusEnumOptions, getExpenditureStatusText }
}
