import { createGetOptionTextFn } from '@/utils'

export enum UsedInTable {
  USED = 'USED',
  NO_USED = 'NO_USED',
  UNDETERMINED = 'UNDETERMINED',
}

export const useUsedInTableEnumHelpers = () => {
  const usedInTableEnumOptions = [
    { value: UsedInTable.USED, label: '納入計算項目' },
    { value: UsedInTable.NO_USED, label: '不納入計算項目' },
    { value: UsedInTable.UNDETERMINED, label: '待委員會決定' },
  ]
  const getUsedInTableEnumText = createGetOptionTextFn(usedInTableEnumOptions)
  return { usedInTableEnumOptions, getUsedInTableEnumText }
}
