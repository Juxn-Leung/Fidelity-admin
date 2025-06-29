import { createGetOptionTextFn } from '@/utils'

export enum HoursType {
  CASE_HOURS = 'CASE_HOURS',
  APPLICATION_HOURS = 'APPLICATION_HOURS',
}

export const useHoursTypeHelpers = () => {
  const hoursTypeEnumOptions = [
    { value: HoursType.CASE_HOURS, label: '案件工時' },
    { value: HoursType.APPLICATION_HOURS, label: '申請個案工時' },
  ]
  const getHoursTypeText = createGetOptionTextFn(hoursTypeEnumOptions)
  return { hoursTypeEnumOptions, getHoursTypeText }
}
