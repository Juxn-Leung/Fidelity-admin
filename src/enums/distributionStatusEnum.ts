import { createGetOptionTextFn } from '@/utils'

export enum DistributionStatus {
  TO_DISTRIBUTE = 'TO_DISTRIBUTE',
  TO_ACCEPT = 'TO_ACCEPT',
  NOT_ACCEPT = 'NOT_ACCEPT',
  ACCEPTED = 'ACCEPTED',
  CANCELED = 'CANCELED',
  // DISTRIBUTION = "DISTRIBUTION",
}

export const useDistributionStatusHelpers = () => {
  const distributionStatusEnumOptions = [
    { value: DistributionStatus.TO_DISTRIBUTE, label: '待分發' },
    { value: DistributionStatus.TO_ACCEPT, label: '待接受' },
    { value: DistributionStatus.ACCEPTED, label: '已接受' },
    { value: DistributionStatus.NOT_ACCEPT, label: '不接受分發' },
    // { value: DistributionStatus.CANCELED, label: "已取消" },
  ]
  const getDistributionStatusText = createGetOptionTextFn(
    distributionStatusEnumOptions
  )
  return { distributionStatusEnumOptions, getDistributionStatusText }
}
