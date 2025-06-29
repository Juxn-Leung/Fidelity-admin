import { createGetOptionTextFn } from '@/utils'

export const useFlagHelpers = () => {
  const flagEnumOptions = [
    { value: true, label: '是' },
    { value: false, label: '否' },
  ]
  const getFlagText = createGetOptionTextFn(flagEnumOptions)
  return { flagEnumOptions, getFlagText }
}
