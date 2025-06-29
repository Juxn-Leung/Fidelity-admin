import { createGetOptionTextFn } from '@/utils'

export enum AppellantType {
  APPLICANT_OR_BENEFICIARY = 'APPLICANT_OR_BENEFICIARY',
  OTHER_PARTY = 'OTHER_PARTY',
}

export const useAppellantTypeHelpers = () => {
  const appellantTypeEnumOptions = [
    { value: AppellantType.APPLICANT_OR_BENEFICIARY, label: '申請人或受益人' },
    { value: AppellantType.OTHER_PARTY, label: '他方當事人' },
  ]
  const getAppellantTypeText = createGetOptionTextFn(appellantTypeEnumOptions)
  return { appellantTypeEnumOptions, getAppellantTypeText }
}
