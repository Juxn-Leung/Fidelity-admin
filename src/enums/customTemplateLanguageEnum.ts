import { createGetOptionTextFn } from '@/utils'

export enum CustomTemplateLanguage {
  CN = 'CN',
  CN_PT = 'CN_PT',
}

export const useContactTypeHelpers = () => {
  const customTemplateLanguageEnumOptions = [
    { value: CustomTemplateLanguage.CN, label: '單語' },
    { value: CustomTemplateLanguage.CN_PT, label: '雙語' },
  ]
  const getCustomTemplateLanguageText = createGetOptionTextFn(
    customTemplateLanguageEnumOptions
  )
  return { customTemplateLanguageEnumOptions, getCustomTemplateLanguageText }
}
