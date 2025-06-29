import { createGetOptionTextFn } from '@/utils'

export enum AbolishType {
  AID_RANGE = 'AID_RANGE',
  LEGAL_CASE = 'LEGAL_CASE',
}

export const useAbolishTypeHelpers = () => {
  const abolishTypeEnumOptions = [
    { value: AbolishType.AID_RANGE, label: '援助範圍' },
    { value: AbolishType.LEGAL_CASE, label: '案件' },
  ]
  const getAbolishTypeText = createGetOptionTextFn(abolishTypeEnumOptions)
  return { abolishTypeEnumOptions, getAbolishTypeText }
}
