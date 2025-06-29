import { createGetOptionTextFn } from '@/utils'

export enum processType {
  N = 'N',
  C = 'C',
  U = 'U',
  B = 'B',
}

export const usePropertyTypeHelpers = () => {
  const processTypeEnumOptions = [
    { value: processType.N, label: '一般' },
    { value: processType.C, label: '保密 ' },
    { value: processType.U, label: '緊急' },
    { value: processType.B, label: '保密緊急' },
  ]
  const getPropertyTypeText = createGetOptionTextFn(processTypeEnumOptions)
  return { processTypeEnumOptions, getPropertyTypeText }
}
