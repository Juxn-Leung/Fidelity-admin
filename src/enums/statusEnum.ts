import { createGetOptionTextFn } from '@/utils'

export enum Status {
  A = 'A',
  C = 'C',
}

export const useStatusHelpers = () => {
  const statusEnumOptions = [
    { value: Status.A, label: '生效' },
    { value: Status.C, label: '失效' },
  ]
  const getStatusText = createGetOptionTextFn(statusEnumOptions)
  return { statusEnumOptions, getStatusText }
}
