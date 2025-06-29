import { createGetOptionTextFn } from '@/utils'

export enum ObjectTypeTag {
  CONSULT_OBJECT = 'CONSULT_OBJECT',
  BUSINESS_OBJECT = 'BUSINESS_OBJECT',
  SENDING_OBJECT = 'SENDING_OBJECT',
}

export const useObjectTypeTagHelpers = () => {
  const objectTypeTagEnumOptions = [
    { value: ObjectTypeTag.CONSULT_OBJECT, label: '諮詢' },
    { value: ObjectTypeTag.BUSINESS_OBJECT, label: '業務' },
    { value: ObjectTypeTag.SENDING_OBJECT, label: '發件' },
  ]
  const getObjectTypeTagText = createGetOptionTextFn(objectTypeTagEnumOptions)
  return { objectTypeTagEnumOptions, getObjectTypeTagText }
}
