import { createGetOptionTextFn } from '@/utils'

export enum StatusProgress {
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  REJECTED = 'REJECTED',
}

export const useStatusProgressHelpers = () => {
  const statusProgressEnumOptions = [
    { value: StatusProgress.IN_PROGRESS, label: '進行中' },
    { value: StatusProgress.COMPLETED, label: '已完成' },
    { value: StatusProgress.REJECTED, label: '已作廢' },
  ]
  const getStatusProgressText = createGetOptionTextFn(statusProgressEnumOptions)
  return { statusProgressEnumOptions, getStatusProgressText }
}
