import { createGetOptionTextFn } from '@/utils'

export enum ContactType {
  SMS = 'SMS',
  FAX = 'FAX',
  EMAIL = 'EMAIL',
}

export const useContactTypeHelpers = () => {
  const contactTypeEnumOptions = [
    { value: ContactType.SMS, label: '電話' },
    { value: ContactType.EMAIL, label: '電郵' },
    { value: ContactType.FAX, label: 'FAX' },
  ]
  const getContactTypeText = createGetOptionTextFn(contactTypeEnumOptions)
  return { contactTypeEnumOptions, getContactTypeText }
}
