import { createGetOptionTextFn } from '@/utils'

export enum SituationUserObject {
  NO_NEED_CONSIDER_OBJECT_TYPE = 'NO_NEED_CONSIDER_OBJECT_TYPE',
  MATCH_BUSINESS_USER_OBJECT_TYPE = 'MATCH_BUSINESS_USER_OBJECT_TYPE',
}

export const useSituationUserObjectHelpers = () => {
  const situationUserObjectEnumOptions = [
    {
      value: SituationUserObject.NO_NEED_CONSIDER_OBJECT_TYPE,
      label: '無需考慮業務新增時的業務對象類型',
    },
    {
      value: SituationUserObject.MATCH_BUSINESS_USER_OBJECT_TYPE,
      label: '與業務新增時的對象類型匹配時',
    },
  ]
  const getSituationUserObjectText = createGetOptionTextFn(
    situationUserObjectEnumOptions
  )
  return { situationUserObjectEnumOptions, getSituationUserObjectText }
}
