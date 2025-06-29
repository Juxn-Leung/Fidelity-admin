import { createGetOptionTextFn } from '@/utils'

export enum ConfigureInvestigationContentType {
  // GENERAL = "GENERAL",
  // STATEMENTS = "STATEMENTS",
  // TRANSCRIPTS = "TRANSCRIPTS",
  NO_SEND_NOTICE = 'NO_SEND_NOTICE',
  DECLARATION = 'DECLARATION',
  DECLARATION_INPUT = 'DECLARATION_INPUT',
}

export const useConfigureInvestigationContentTypeHelpers = () => {
  const configureInvestigationContentTypeEnumOptions = [
    // { value: ConfigureInvestigationContentType.GENERAL, label: "一般調查（不發函）" },
    // { value: ConfigureInvestigationContentType.STATEMENTS, label: "聲明書" },
    // { value: ConfigureInvestigationContentType.TRANSCRIPTS, label: "聲明筆錄" },
    {
      value: ConfigureInvestigationContentType.NO_SEND_NOTICE,
      label: '一般調查（不發函）',
    },
    { value: ConfigureInvestigationContentType.DECLARATION, label: '聲明書' },
    {
      value: ConfigureInvestigationContentType.DECLARATION_INPUT,
      label: '聲明筆錄',
    },
  ]
  const getConfigureInvestigationContentTypeText = createGetOptionTextFn(
    configureInvestigationContentTypeEnumOptions
  )
  return {
    configureInvestigationContentTypeEnumOptions,
    getConfigureInvestigationContentTypeText,
  }
}
