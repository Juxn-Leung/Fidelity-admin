import { createGetOptionTextFn } from '@/utils'

export enum PropertyApplicantType {
  APPLICANT = 'APPLICANT',
  FAMILY_MEMBER = 'FAMILY_MEMBER',
}

export const usePropertyApplicantTypeHelpers = () => {
  const propertyApplicantTypeEnumOptions = [
    { value: PropertyApplicantType.APPLICANT, label: '申請人' },
    { value: PropertyApplicantType.FAMILY_MEMBER, label: '家團成員' },
  ]
  const getPropertyApplicantTypeText = createGetOptionTextFn(
    propertyApplicantTypeEnumOptions
  )
  return { propertyApplicantTypeEnumOptions, getPropertyApplicantTypeText }
}
