import { createGetOptionTextFn } from '@/utils'

export enum RelationType {
  PRIMARY = 'PRIMARY',
  NOT_PRIMARY = 'NOT_PRIMARY',
}

export const useRelationTypeHelpers = () => {
  const relationTypeEnumOptions = [
    { value: RelationType.PRIMARY, label: '首選檔案' },
    { value: RelationType.NOT_PRIMARY, label: '非首選檔案' },
  ]
  const getRelationTypeText = createGetOptionTextFn(relationTypeEnumOptions) || '無關聯'
  return { relationTypeEnumOptions, getRelationTypeText }
}
