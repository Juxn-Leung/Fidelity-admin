import { createGetOptionTextFn } from '@/utils'

export enum ConclusionSourceType {
  RECEPTION = 'RECEPTION',
  MOBILE = 'MOBILE',
  EMAIL = 'EMAIL',
  LETTER = 'LETTER',
  OTHER = 'OTHER',
}

export const useConclusionSourceTypeHelpers = () => {
  const conclusionSourceTypeEnumOptions = [
    { value: ConclusionSourceType.RECEPTION, label: '接待處' },
    { value: ConclusionSourceType.MOBILE, label: '電話' },
    { value: ConclusionSourceType.EMAIL, label: '電郵' },
    { value: ConclusionSourceType.LETTER, label: '信件' },
    { value: ConclusionSourceType.OTHER, label: '其他' },
  ]
  const getConclusionSourceTypeText = createGetOptionTextFn(
    conclusionSourceTypeEnumOptions
  )
  return { conclusionSourceTypeEnumOptions, getConclusionSourceTypeText }
}
