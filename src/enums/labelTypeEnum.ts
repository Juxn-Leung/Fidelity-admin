import { createGetOptionTextFn } from '@/utils'

export enum LabelType {
  CASE = 'CASE',
  CONSULTATION = 'CONSULTATION',
}

export const useLabelTypeHelpers = () => {
  const labelTypeEnumOptions = [
    { value: LabelType.CONSULTATION, label: '諮詢' },
    { value: LabelType.CASE, label: '個案' },
  ]
  const getLabelTypeText = createGetOptionTextFn(labelTypeEnumOptions)
  return { labelTypeEnumOptions, getLabelTypeText }
}
