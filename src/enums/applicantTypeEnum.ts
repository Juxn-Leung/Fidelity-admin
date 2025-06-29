import { createGetOptionTextFn } from '@/utils'

export enum ApplicantType {
  PERSONAL = 'PERSONAL',
  CORPORATE = 'CORPORATE',
}

export const useApplicantTypeHelpers = () => {
  const applicantTypeEnumOptions = [
    { value: ApplicantType.PERSONAL, label: '個人' },
    { value: ApplicantType.CORPORATE, label: '法人' },
  ]
  const getApplicantTypeText = createGetOptionTextFn(applicantTypeEnumOptions)
  return { applicantTypeEnumOptions, getApplicantTypeText }
}
