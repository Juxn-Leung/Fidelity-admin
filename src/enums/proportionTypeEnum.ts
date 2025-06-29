import { createGetOptionTextFn } from '@/utils'

export enum ProportionType {
  FAMILY_MEMBER = 'FAMILY_MEMBER',
  COMPANY = 'COMPANY',
}

export const useProportionTypeHelpers = () => {
  const proportionTypeEnumOptions = [
    { value: ProportionType.FAMILY_MEMBER, label: '家團成員' },
    { value: ProportionType.COMPANY, label: '公司' },
  ]
  const getProportionTypeText = createGetOptionTextFn(proportionTypeEnumOptions)
  return { proportionTypeEnumOptions, getProportionTypeText }
}
