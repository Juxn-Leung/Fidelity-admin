import { createGetOptionTextFn } from '@/utils'

export enum SituationResult {
  BUSINESS_GENERAL = 'BUSINESS_GENERAL',
  MATCH_BUSINESS_RESULT = 'MATCH_BUSINESS_RESULT',
}

export const useSituationResultHelpers = () => {
  const situationResultEnumOptions = [
    { value: SituationResult.BUSINESS_GENERAL, label: '業務通用' },
    { value: SituationResult.MATCH_BUSINESS_RESULT, label: '符合業務結果' },
  ]
  const getSituationResultText = createGetOptionTextFn(
    situationResultEnumOptions
  )
  return { situationResultEnumOptions, getSituationResultText }
}
