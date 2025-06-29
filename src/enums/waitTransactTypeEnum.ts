import { createGetOptionTextFn } from '@/utils'

export enum WaitTransactType {
  DISTRIBUTION_DISTRIBUTION = 'DISTRIBUTION_DISTRIBUTION',
  DISTRIBUTION_ACCEPTING = 'DISTRIBUTION_ACCEPTING',
  DISTRIBUTION_REDISTRIBUTION = 'DISTRIBUTION_REDISTRIBUTION',
}

export const useWaitTransactTypeEnumHelpers = () => {
  const waitTransactTypeEnumOptions = [
    { value: WaitTransactType.DISTRIBUTION_DISTRIBUTION, label: '分發' },
    { value: WaitTransactType.DISTRIBUTION_ACCEPTING, label: '接受分發' },
    { value: WaitTransactType.DISTRIBUTION_REDISTRIBUTION, label: '重新分發' },
  ]
  const getWaitTransactTypeEnumText = createGetOptionTextFn(waitTransactTypeEnumOptions)
  return { waitTransactTypeEnumOptions, getWaitTransactTypeEnumText }
}
