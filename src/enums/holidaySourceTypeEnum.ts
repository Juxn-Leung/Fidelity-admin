import { createGetOptionTextFn } from '@/utils'

export enum HolidaySourceType {
  MANUAL = 'MANUAL',
  EXPORT = 'EXPORT',
}

export const useHolidaySourceTypeHelpers = () => {
  const holidaySourceTypeEnumOptions = [
    { value: HolidaySourceType.MANUAL, label: '手動' },
    { value: HolidaySourceType.EXPORT, label: '導入' },
  ]
  const getHolidaySourceTypeText = createGetOptionTextFn(holidaySourceTypeEnumOptions)
  return { holidaySourceTypeEnumOptions, getHolidaySourceTypeText }
}
