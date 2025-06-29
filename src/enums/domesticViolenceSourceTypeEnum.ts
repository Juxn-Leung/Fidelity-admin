import { createGetOptionTextFn } from '@/utils'

export enum DomesticViolenceSourceType {
  CONSULTATION = 'CONSULTATION',
  APPLICANT = 'APPLICANT',
}

export const useDomesticViolenceSourceTypeHelpers = () => {
  const domesticViolenceSourceTypeEnumOptions = [
    { value: DomesticViolenceSourceType.CONSULTATION, label: '諮詢人' },
    {
      value: DomesticViolenceSourceType.APPLICANT,
      label: '申請人或受益人的家屬',
    },
  ]
  const getDomesticViolenceSourceTypeText = createGetOptionTextFn(
    domesticViolenceSourceTypeEnumOptions
  )
  return {
    domesticViolenceSourceTypeEnumOptions,
    getDomesticViolenceSourceTypeText,
  }
}
