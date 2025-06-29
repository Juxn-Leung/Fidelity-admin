import { createGetOptionTextFn } from '@/utils'

export enum ResolutionStatus {
  TO_SCHEDULED = 'TO_SCHEDULED',
  SCHEDULED = 'SCHEDULED',
  CONCLUDED = 'CONCLUDED',
  RETURNED = 'RETURNED',
}

export const useResolutionStatusHelpers = () => {
  const resolutionStatusEnumOptions = [
    { value: ResolutionStatus.TO_SCHEDULED, label: '待排程' },
    { value: ResolutionStatus.SCHEDULED, label: '已排程' },
    { value: ResolutionStatus.CONCLUDED, label: '有結論' },
    { value: ResolutionStatus.RETURNED, label: '已退回' },
  ]
  const getResolutionStatusText = createGetOptionTextFn(
    resolutionStatusEnumOptions
  )
  return { resolutionStatusEnumOptions, getResolutionStatusText }
}
