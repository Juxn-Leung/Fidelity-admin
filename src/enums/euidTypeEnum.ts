import { createGetOptionTextFn } from '@/utils'

export enum EuidType {
  INTERNAL = 'INTERNAL',
  EXTERNAL = 'EXTERNAL',
}

export const useEuidTypeHelpers = () => {
  const euidTypeEnumOptions = [
    { value: EuidType.INTERNAL, label: '內部' },
    { value: EuidType.EXTERNAL, label: '外部' },
  ]
  const getEuidTypeText = createGetOptionTextFn(euidTypeEnumOptions)
  return { euidTypeEnumOptions, getEuidTypeText }
}
