import { createGetOptionTextFn } from '@/utils'

export enum CaseProxyType {
  MAIN_RESPONSIBLE = 'MAIN_RESPONSIBLE',
  RESPONSIBLE_PROXY = 'RESPONSIBLE_PROXY',
}

export const useCaseProxyTypeHelpers = () => {
  const caseProxyTypeEnumOptions = [
    { value: CaseProxyType.MAIN_RESPONSIBLE, label: '主責' },
    { value: CaseProxyType.RESPONSIBLE_PROXY, label: '代任' },
  ]
  const getCaseProxyTypeText = createGetOptionTextFn(caseProxyTypeEnumOptions)
  return { caseProxyTypeEnumOptions, getCaseProxyTypeText }
}
