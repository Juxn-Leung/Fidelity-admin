import { createGetOptionTextFn } from '@/utils'

export enum SendType {
  INTERNAL = 'INTERNAL',
  EXTERNAL = 'EXTERNAL',
}

export const useSendTypeHelpers = () => {
  const SendTypeEnumOptions = [
    { value: SendType.INTERNAL, label: '內部' },
    { value: SendType.EXTERNAL, label: '外部' },
  ]
  const getSendTypeText = createGetOptionTextFn(SendTypeEnumOptions)
  return { SendTypeEnumOptions, getSendTypeText }
}
