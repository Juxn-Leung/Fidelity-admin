import { createGetOptionTextFn } from '@/utils'

export enum SendingTypeObject {
  CRIMINAL_POLICE = 'CRIMINAL_POLICE',
  ARBITRATION = 'ARBITRATION',
  JUDICIAL_AID = 'JUDICIAL_AID',
  OTHER_GOVERNMENT = 'OTHER_GOVERNMENT',
  OTHER_INSTITUTIONS = 'OTHER_INSTITUTIONS',
  BANKS = 'BANKS',
  INSURANCE_COMPANIES = 'INSURANCE_COMPANIES',
  LEGAL_AFFAIRS = 'LEGAL_AFFAIRS',
  SOCIAL_WELFARE = 'SOCIAL_WELFARE',
  JUDICIAL_OFFICE = 'JUDICIAL_OFFICE',
  HIGHER_BAR_COMMITTEES = 'HIGHER_BAR_COMMITTEES',
  OTHER = 'OTHER',
}

export const useSendingTypeObjectHelpers = () => {
  const sendingTypeObjectEnumOptions = [
    { value: SendingTypeObject.CRIMINAL_POLICE, label: '刑事警察機關' },
    { value: SendingTypeObject.ARBITRATION, label: '仲裁機構' },
    { value: SendingTypeObject.JUDICIAL_AID, label: '司法援助委員會' },
    { value: SendingTypeObject.OTHER_GOVERNMENT, label: '其他政府部門' },
    { value: SendingTypeObject.OTHER_INSTITUTIONS, label: '其他私人機構' },
    { value: SendingTypeObject.BANKS, label: '銀行' },
    { value: SendingTypeObject.INSURANCE_COMPANIES, label: '保險公司' },
    { value: SendingTypeObject.LEGAL_AFFAIRS, label: '法務局' },
    { value: SendingTypeObject.SOCIAL_WELFARE, label: '社工局' },
    { value: SendingTypeObject.JUDICIAL_OFFICE, label: '司法機關' },
    {
      value: SendingTypeObject.HIGHER_BAR_COMMITTEES,
      label: '律師業高等委員會',
    },
    { value: SendingTypeObject.OTHER, label: '其他' },
  ]

  const sendingTypeObjectEnumOptions2 = [
    { value: SendingTypeObject.CRIMINAL_POLICE, label: '刑事警察機關' },
    { value: SendingTypeObject.ARBITRATION, label: '仲裁機構' },
    { value: SendingTypeObject.JUDICIAL_AID, label: '司法援助委員會' },
    { value: SendingTypeObject.OTHER_GOVERNMENT, label: '其他政府部門' },
    { value: SendingTypeObject.OTHER_INSTITUTIONS, label: '其他私人機構' },
    { value: SendingTypeObject.LEGAL_AFFAIRS, label: '法務局' },
    { value: SendingTypeObject.SOCIAL_WELFARE, label: '社工局' },
    { value: SendingTypeObject.JUDICIAL_OFFICE, label: '司法機關' },
    {
      value: SendingTypeObject.HIGHER_BAR_COMMITTEES,
      label: '律師業高等委員會',
    },
    { value: SendingTypeObject.OTHER, label: '其他' },
  ]
  const getSendingTypeObjectText = createGetOptionTextFn(
    sendingTypeObjectEnumOptions
  )
  return {
    sendingTypeObjectEnumOptions,
    sendingTypeObjectEnumOptions2,
    getSendingTypeObjectText,
  }
}
