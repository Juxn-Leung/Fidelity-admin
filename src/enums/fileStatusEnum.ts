import { createGetOptionTextFn } from '@/utils'

export enum FileStatus {
  ACTIVE = 'ACTIVE',
  DISABLED = 'DISABLED',
}

export const useFileStatusHelpers = () => {
  const fileStatusEnumOptions = [
    { value: FileStatus.ACTIVE, label: '生效' },
    { value: FileStatus.DISABLED, label: '失效' },
  ]
  const getFileStatusText = createGetOptionTextFn(fileStatusEnumOptions)
  return { fileStatusEnumOptions, getFileStatusText }
}
