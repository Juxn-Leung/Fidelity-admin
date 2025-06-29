import { createGetOptionTextFn } from '@/utils'

export enum Language {
  ZH_HANT = 'ZH_HANT',
  ZH_HANS = 'ZH_HANS',
  PT = 'PT',
  EN = 'EN',
}

export const useLanguageHelpers = () => {
  const languageEnumOptions = [
    { value: Language.ZH_HANT, label: '繁體中文' },
    { value: Language.ZH_HANS, label: '簡體中文' },
    { value: Language.PT, label: '葡文' },
    { value: Language.EN, label: '英文' },
  ]
  const getLanguageText = createGetOptionTextFn(languageEnumOptions)

  const languageEnumOptionsII = [
    { value: Language.ZH_HANT, label: '中文' },
    { value: Language.PT, label: '葡文' },
  ]
  const getLanguageTextII = createGetOptionTextFn(languageEnumOptionsII)
  return {
    languageEnumOptions,
    getLanguageText,
    languageEnumOptionsII,
    getLanguageTextII,
  }
}
