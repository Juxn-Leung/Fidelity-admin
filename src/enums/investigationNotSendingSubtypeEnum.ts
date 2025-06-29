import { createGetOptionTextFn } from '@/utils'

export enum ConfigureInvestigationNotSendingSubtype {
  OTHER = 'OTHER',
  SOCIAL_SECURITY_FUND = 'SOCIAL_SECURITY_FUND',
  PROPERTY_REGISTRATION = 'PROPERTY_REGISTRATION',
  MOVABLE_REGISTRATION = 'MOVABLE_REGISTRATION',
  BUSINESS_REGISTRATION = 'BUSINESS_REGISTRATION',
}

export const useConfigureInvestigationNotSendingSubtypeHelpers = () => {
  const configureInvestigationNotSendingSubtypeEnumOptions = [
    { value: ConfigureInvestigationNotSendingSubtype.OTHER, label: '其他' },
    {
      value: ConfigureInvestigationNotSendingSubtype.SOCIAL_SECURITY_FUND,
      label: '社會保障基金',
    },
    {
      value: ConfigureInvestigationNotSendingSubtype.PROPERTY_REGISTRATION,
      label: '物業登記',
    },
    {
      value: ConfigureInvestigationNotSendingSubtype.MOVABLE_REGISTRATION,
      label: '動產登記',
    },
    {
      value: ConfigureInvestigationNotSendingSubtype.BUSINESS_REGISTRATION,
      label: '商業登記',
    },
  ]
  const getConfigureInvestigationNotSendingSubtypeText = createGetOptionTextFn(
    configureInvestigationNotSendingSubtypeEnumOptions
  )
  return {
    configureInvestigationNotSendingSubtypeEnumOptions,
    getConfigureInvestigationNotSendingSubtypeText,
  }
}
