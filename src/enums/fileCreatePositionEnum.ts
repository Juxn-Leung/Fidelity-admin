import { createGetOptionTextFn } from '@/utils'

export enum CreatePositionEnum {
  MODULE_UPLOAD = 'MODULE_UPLOAD',
  RELATED_FILE = 'RELATED_FILE',
}

export const useCreatePositionHelpers = () => {
  const createPositionEnumOptions = [
    { value: CreatePositionEnum.MODULE_UPLOAD, label: '模塊內上傳文件' },
    { value: CreatePositionEnum.RELATED_FILE, label: '關聯其他模塊文件' },
  ]
  const getCreatePositionText = createGetOptionTextFn(createPositionEnumOptions)
  return { createPositionEnumOptions, getCreatePositionText }
}
