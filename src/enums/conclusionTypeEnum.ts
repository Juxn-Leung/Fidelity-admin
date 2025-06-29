import { createGetOptionTextFn } from '@/utils'

export enum ConclusionType {
  INIT = 'INIT',
  END = 'END',
}

export const useConclusionTypeHelpers = () => {
  const conclusionTypeEnumOptions = [
    { value: ConclusionType.INIT, label: '初步結論' },
    { value: ConclusionType.END, label: '最終結論' },
  ]
  const getConclusionTypeText = createGetOptionTextFn(conclusionTypeEnumOptions)
  return { conclusionTypeEnumOptions, getConclusionTypeText }
}
