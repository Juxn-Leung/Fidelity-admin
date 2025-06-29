import { createGetOptionTextFn } from '@/utils'

export const useBooleanHelpers = () => {
  const booleanEnumOptions = [
    { value: true, label: '是' },
    { value: false, label: '否' },
  ]
  const getBooleanText = createGetOptionTextFn(booleanEnumOptions)
  return { booleanEnumOptions, getBooleanText }
}
