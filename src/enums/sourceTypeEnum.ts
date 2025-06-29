import { createGetOptionTextFn } from '@/utils'
export enum SourceType {
  RECEPTION = 'RECEPTION',
  MOBILE = 'MOBILE',
  EMAIL = 'EMAIL',
  // ONE_ACCOUNT = 'ONE_ACCOUNT',
  LETTER = 'LETTER',
  OTHER = 'OTHER',
}

export const useSourceTypeHelpers = () => {
  const sourceTypeEnumOptions = [
    { value: SourceType.RECEPTION, label: '接待處' },
    { value: SourceType.MOBILE, label: '電話' },
    { value: SourceType.EMAIL, label: '電郵' },
    // { value: SourceType.ONE_ACCOUNT, label: '一戶通' },
    { value: SourceType.LETTER, label: '信件' },
    { value: SourceType.OTHER, label: '其他' },
  ]
  const getSourceTypeText = createGetOptionTextFn(sourceTypeEnumOptions)
  return { sourceTypeEnumOptions, getSourceTypeText }
}
