import { createGetOptionTextFn } from '@/utils'

export enum PropertyType {
  PROPERTY_INCOME_PERSONAL_WORK = 'PROPERTY_INCOME_PERSONAL_WORK',
  PROPERTY_INCOME_PERSONAL_OTHER = 'PROPERTY_INCOME_PERSONAL_OTHER',
  PROPERTY_INCOME_CORPORATION = 'PROPERTY_INCOME_CORPORATION',
  PROPERTY_EXPENSES_PERSONAL = 'PROPERTY_EXPENSES_PERSONAL',
  PROPERTY_EXPENSES_CORPORATION = 'PROPERTY_EXPENSES_CORPORATION',
  PROPERTY_TRANSPORTATION = 'PROPERTY_TRANSPORTATION',
  PROPERTY_ASSETS = 'PROPERTY_ASSETS',
  PROPERTY_ASSETS_OTHER = 'PROPERTY_ASSETS_OTHER',
  PROPERTY_BANK = 'PROPERTY_BANK',
  PROPERTY_LOAN = 'PROPERTY_LOAN',
  PROPERTY_COMPANY = 'PROPERTY_COMPANY',
  PROPERTY_INCOME_COMPANY = 'PROPERTY_INCOME_COMPANY',
  PROPERTY_IMMOVABLE = 'PROPERTY_IMMOVABLE',
}

export const usePropertyTypeHelpers = () => {
  const propertyTypeEnumOptions = [
    {
      value: PropertyType.PROPERTY_INCOME_PERSONAL_WORK,
      label: '個人收入（工作收入）',
    },
    {
      value: PropertyType.PROPERTY_INCOME_PERSONAL_OTHER,
      label: '個人收入（其他收入）',
    },
    { value: PropertyType.PROPERTY_INCOME_CORPORATION, label: '法人收入' },
    { value: PropertyType.PROPERTY_EXPENSES_PERSONAL, label: '個人支出' },
    { value: PropertyType.PROPERTY_EXPENSES_CORPORATION, label: '法人支出' },
    { value: PropertyType.PROPERTY_TRANSPORTATION, label: '交通工具' },
    { value: PropertyType.PROPERTY_BANK, label: '銀行賬戶' },
    { value: PropertyType.PROPERTY_ASSETS, label: '股份、出資及有價證券' },
    {
      value: PropertyType.PROPERTY_ASSETS_OTHER,
      label: '價值高於五千澳門元的債權、現金或其他物品',
    },
    { value: PropertyType.PROPERTY_IMMOVABLE, label: '不動產' },
    {
      value: PropertyType.PROPERTY_LOAN,
      label: '以不動產作抵押擔保的銀行貸款',
    },
    { value: PropertyType.PROPERTY_COMPANY, label: '公司' },
    { value: PropertyType.PROPERTY_INCOME_COMPANY, label: '公司收入' },
  ]

  const getPropertyTypeText = createGetOptionTextFn(propertyTypeEnumOptions)
  return {
    propertyTypeEnumOptions,
    getPropertyTypeText,
    personalPropertyTypeEnumOption: propertyTypeEnumOptions.filter(
      (ele) =>
        ![
          PropertyType.PROPERTY_INCOME_CORPORATION,
          PropertyType.PROPERTY_EXPENSES_CORPORATION,
        ].includes(ele.value)
    ),
    corporationPropertyTypeEnumOption: propertyTypeEnumOptions.filter(
      (ele) =>
        ![
          PropertyType.PROPERTY_INCOME_PERSONAL_WORK,
          PropertyType.PROPERTY_INCOME_PERSONAL_OTHER,
          PropertyType.PROPERTY_EXPENSES_PERSONAL,
        ].includes(ele.value)
    ),
  }
}
