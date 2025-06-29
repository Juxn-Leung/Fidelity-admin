import { createGetOptionTextFn } from '@/utils'

export enum AddingType {
  ONLINE_ORIGINAL = 'ONLINE_ORIGINAL',
  ONLINE_FLLOW = 'ONLINE_FLLOW',
  OFFLINE_INPUT = 'OFFLINE_INPUT',
  DEATH = 'DEATH',
}

export const useAddingTypeHelpers = () => {
  const addingTypeEnumOptions = [
    { value: AddingType.ONLINE_ORIGINAL, label: '在線提交原始' },
    { value: AddingType.ONLINE_FLLOW, label: '在線提交跟進' },
    { value: AddingType.OFFLINE_INPUT, label: '線下錄入' },
    { value: AddingType.DEATH, label: '死亡後繼受' },
  ]
  const getAddingTypeText = createGetOptionTextFn(addingTypeEnumOptions)
  return { addingTypeEnumOptions, getAddingTypeText }
}
