import { createGetOptionTextFn } from '@/utils'

export enum ConfigureInvestigationSendingSubtype {
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
}

export const useConfigureInvestigationSendingSubtypeHelpers = () => {
  const configureInvestigationSendingSubtypeEnumOptions = [
    {
      value: ConfigureInvestigationSendingSubtype.CRIMINAL_POLICE,
      label: '刑事警察機關',
    },
    {
      value: ConfigureInvestigationSendingSubtype.ARBITRATION,
      label: '仲裁機構',
    },
    {
      value: ConfigureInvestigationSendingSubtype.JUDICIAL_AID,
      label: '司法援助委員會',
    },
    {
      value: ConfigureInvestigationSendingSubtype.OTHER_GOVERNMENT,
      label: '其他政府部門',
    },
    {
      value: ConfigureInvestigationSendingSubtype.OTHER_INSTITUTIONS,
      label: '其他私人機構',
    },
    { value: ConfigureInvestigationSendingSubtype.BANKS, label: '銀行' },
    {
      value: ConfigureInvestigationSendingSubtype.INSURANCE_COMPANIES,
      label: '保險公司',
    },
    {
      value: ConfigureInvestigationSendingSubtype.LEGAL_AFFAIRS,
      label: '法務局',
    },
    {
      value: ConfigureInvestigationSendingSubtype.SOCIAL_WELFARE,
      label: '社工局',
    },
    {
      value: ConfigureInvestigationSendingSubtype.JUDICIAL_OFFICE,
      label: '司法機關',
    },
    {
      value: ConfigureInvestigationSendingSubtype.HIGHER_BAR_COMMITTEES,
      label: '律師業高等委員會',
    },
  ]
  const getConfigureInvestigationSendingSubtypeText = createGetOptionTextFn(
    configureInvestigationSendingSubtypeEnumOptions
  )
  return {
    configureInvestigationSendingSubtypeEnumOptions,
    getConfigureInvestigationSendingSubtypeText,
  }
}
