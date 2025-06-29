import { createGetOptionTextFn } from '@/utils'

export enum FileRelationTypeEnum {
  UPLOAD = 'UPLOAD',
  RELATED = 'RELATED',
}

export const useFileRelationTypeEnumHelpers = () => {
  const fileRelationTypeEnumOptions = [
    { value: FileRelationTypeEnum.UPLOAD, label: '模塊內上傳文件' },
    { value: FileRelationTypeEnum.RELATED, label: '關聯其他模塊文件' },
  ]
  const getFileRelationTypeEnumText = createGetOptionTextFn(fileRelationTypeEnumOptions)
  return { fileRelationTypeEnumOptions, getFileRelationTypeEnumText }
}
