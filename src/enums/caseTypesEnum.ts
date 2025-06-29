import { createGetOptionTextFn } from '@/utils'

export enum CaseTypes {
  APPLY = 'APPLY',
  EXTEND = 'EXTEND',
}

export const useCaseTypesHelpers = () => {
  const caseTypesEnumOptions = [
    { value: CaseTypes.APPLY, label: '申請的案件' },
    { value: CaseTypes.EXTEND, label: '延伸的案件' },
  ]
  const getCaseTypesText = createGetOptionTextFn(caseTypesEnumOptions)
  return { caseTypesEnumOptions, getCaseTypesText }
}
