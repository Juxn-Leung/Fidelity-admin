import { createGetOptionTextFn } from '@/utils'

export enum CaseType {
  LITIGATION = 'LITIGATION',
  ARBITRATION = 'ARBITRATION',
}

export enum CaseTypeII {
  APPLY = 'APPLY',
  EXTEND = 'EXTEND',
}

export const useCaseTypeHelpers = () => {
  const caseTypeEnumOptions = [
    { value: CaseType.LITIGATION, label: '訴訟' },
    { value: CaseType.ARBITRATION, label: '仲裁' },
  ]
  const caseTypeIIEnumOptions = [
    { value: CaseTypeII.APPLY, label: '申請的案件' },
    { value: CaseTypeII.EXTEND, label: '延伸的案件' },
  ]
  const getCaseTypeText = createGetOptionTextFn(caseTypeEnumOptions)
  const getCaseTypeIIText = createGetOptionTextFn(caseTypeIIEnumOptions)
  return { caseTypeEnumOptions, getCaseTypeText, caseTypeIIEnumOptions, getCaseTypeIIText }
}
