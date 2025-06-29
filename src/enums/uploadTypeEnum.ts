import { createGetOptionTextFn } from '@/utils'

export enum UploadType {
  LOCAL = 'local',
  SCAN = 'scan',
  SCEYE = 'sceye',
}

export const useUploadTypeHelpers = () => {
  const uploadTypeEnumOptions = [
    { value: UploadType.LOCAL, label: '本地文件' },
    { value: UploadType.SCAN, label: '快速掃描' },
    { value: UploadType.SCEYE, label: '高拍掃描' },
  ]
  const getUploadTypeText = createGetOptionTextFn(uploadTypeEnumOptions)
  return { uploadTypeEnumOptions, getUploadTypeText }
}
