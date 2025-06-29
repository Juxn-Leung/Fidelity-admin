import { createGetOptionTextFn } from '@/utils'

export enum ConfigureInvestigationPresupposeType {
  SEND_NOTICE = 'SEND_NOTICE',
  NO_SEND_NOTICE = 'NO_SEND_NOTICE',
  DECLARATION = 'DECLARATION',
  DECLARATION_INPUT = 'DECLARATION_INPUT',
}

export const useConfigureInvestigationPresupposeTypeHelpers = () => {
  const configureInvestigationPresupposeTypeEnumOptions = [
    {
      value: ConfigureInvestigationPresupposeType.SEND_NOTICE,
      label: '一般調查（發函）',
    },
    {
      value: ConfigureInvestigationPresupposeType.NO_SEND_NOTICE,
      label: '一般調查（不發函）',
    },
    {
      value: ConfigureInvestigationPresupposeType.DECLARATION,
      label: '聲明書',
    },
    {
      value: ConfigureInvestigationPresupposeType.DECLARATION_INPUT,
      label: '聲明筆錄',
    },
  ]
  const getConfigureInvestigationPresupposeTypeText = createGetOptionTextFn(
    configureInvestigationPresupposeTypeEnumOptions
  )
  return {
    configureInvestigationPresupposeTypeEnumOptions,
    getConfigureInvestigationPresupposeTypeText,
  }
}
