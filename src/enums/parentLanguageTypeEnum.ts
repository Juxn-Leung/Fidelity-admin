import { createGetOptionTextFn } from '@/utils'

export enum ParentLanguage {
  ZH_HANT = 'ZH_HANT',
  PT = 'PT',
  EN = 'EN',
}

export const useParentLanguageHelpers = () => {
  const parentLanguageEnumOptions = [
    { value: ParentLanguage.ZH_HANT, label: '中文' },
    { value: ParentLanguage.PT, label: '葡文' },
    { value: ParentLanguage.EN, label: '英文' },
  ]
  const getParentLanguageText = createGetOptionTextFn(parentLanguageEnumOptions)
  return { parentLanguageEnumOptions, getParentLanguageText }
}
