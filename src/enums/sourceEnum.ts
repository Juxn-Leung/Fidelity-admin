import { createGetOptionTextFn } from '@/utils'

export enum Source {
  SELF_REPORT = 'SELF_REPORT',
  INVESTIGATION = 'INVESTIGATION',
}

export const useSourceHelpers = () => {
  const sourceEnumOptions = [
    { value: Source.SELF_REPORT, label: '自行申報' },
    { value: Source.INVESTIGATION, label: '調查所得' },
  ]
  const getSourceEnumText = createGetOptionTextFn(sourceEnumOptions)
  return { sourceEnumOptions, getSourceEnumText }
}
