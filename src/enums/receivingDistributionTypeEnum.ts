import { createGetOptionTextFn } from '@/utils'

export enum ReceivingDistributionType {
  INTERNAL = 'INTERNAL',
  EXTERNAL = 'EXTERNAL',
}

export const useReceivingDistributionTypeHelpers = () => {
  const receivingDistributionTypeEnumOptions = [
    { value: ReceivingDistributionType.INTERNAL, label: '內部' },
    { value: ReceivingDistributionType.EXTERNAL, label: '外部' },
  ]
  const getReceivingDistributionTypeText = createGetOptionTextFn(
    receivingDistributionTypeEnumOptions
  )
  return {
    receivingDistributionTypeEnumOptions,
    getReceivingDistributionTypeText,
  }
}
