import { createGetOptionTextFn } from '@/utils'

export enum CorporateType {
  CORPORATE_REGISTERED = 'CORPORATE_REGISTERED',
  BUSINESS_REGISTERED = 'BUSINESS_REGISTERED',
  NO_BUSINESS_REGISTERED = 'NO_BUSINESS_REGISTERED',
  CLUB_REGISTERED = 'CLUB_REGISTERED',
  NO_ANY_REGISTERED = 'NO_ANY_REGISTERED',
}

export const useCorporateTypeHelpers = () => {
  const corporateTypeEnumOptions = [
    { value: CorporateType.CORPORATE_REGISTERED, label: '法人登記證明' },
    { value: CorporateType.BUSINESS_REGISTERED, label: '商業登記證明' },
    { value: CorporateType.NO_BUSINESS_REGISTERED, label: '沒有商業登記證明' },
    // { value: CorporateType.CLUB_REGISTERED, label: "社團登記證明" },
    { value: CorporateType.NO_ANY_REGISTERED, label: '沒有任何登記證明' },
  ]
  const getCorporateTypeText = createGetOptionTextFn(corporateTypeEnumOptions)
  return { corporateTypeEnumOptions, getCorporateTypeText }
}
