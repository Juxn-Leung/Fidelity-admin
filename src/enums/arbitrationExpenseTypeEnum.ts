import { createGetOptionTextFn } from '@/utils'

export enum ArbitrationExpenseType {
  ARBITRATION_PRE_AMOUNT = 'ARBITRATION_PRE_AMOUNT',
  ARBITRATION_BURDEN = 'ARBITRATION_BURDEN',
}

export const useArbitrationExpenseTypeHelpers = () => {
  const arbitrationExpenseTypeEnumOptions = [
    {
      value: ArbitrationExpenseType.ARBITRATION_PRE_AMOUNT,
      label: '豁免支付預付金（仲裁）',
    },
    { value: ArbitrationExpenseType.ARBITRATION_BURDEN, label: '豁免支付仲裁負擔' },
  ]
  const getArbitrationExpenseTypeText = createGetOptionTextFn(
    arbitrationExpenseTypeEnumOptions
  )
  return { arbitrationExpenseTypeEnumOptions, getArbitrationExpenseTypeText }
}
