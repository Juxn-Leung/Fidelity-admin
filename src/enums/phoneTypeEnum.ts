import { createGetOptionTextFn } from '@/utils'

export enum phoneTyp {
  LISTEN = 'LISTEN',
  CALL = 'CALL',
}

export const usePhoneTypeHelpers = () => {
  const phoneTypEnumOptions = [
    { value: phoneTyp.LISTEN, label: '接聽' },
    { value: phoneTyp.CALL, label: '致電 ' },
  ]
  const getPhoneTypText = createGetOptionTextFn(phoneTypEnumOptions)
  return { phoneTypEnumOptions, getPhoneTypText }
}
