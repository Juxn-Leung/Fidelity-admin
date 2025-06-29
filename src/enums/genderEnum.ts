import { createGetOptionTextFn } from '@/utils'

export enum Gender {
  M = 'M',
  F = 'F',
}

export const useGenderHelpers = () => {
  const genderEnumOptions = [
    { value: Gender.M, label: '男' },
    { value: Gender.F, label: '女' },
  ]
  const getGenderText = createGetOptionTextFn(genderEnumOptions)
  return { genderEnumOptions, getGenderText }
}
