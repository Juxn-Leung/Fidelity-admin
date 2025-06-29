import { createGetOptionTextFn } from '@/utils'

export enum DistributionType {
  NEW = 'NEW',
  RENEW = 'RENEW',
}

export const useDistributionTypeHelpers = () => {
  const distributionTypeEnumOptions = [
    { value: DistributionType.NEW, label: '新分發' },
    { value: DistributionType.RENEW, label: '不接受需再分發' },
  ]
  const getDistributionTypeText = createGetOptionTextFn(distributionTypeEnumOptions)
  return { distributionTypeEnumOptions, getDistributionTypeText }
}
