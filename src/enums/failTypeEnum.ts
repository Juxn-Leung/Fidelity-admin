import { createGetOptionTextFn } from '@/utils'

export enum FailType {
  EXPIRED = 'EXPIRED',
  DEAD = 'DEAD',
  DEAD_INHERIT = 'DEAD_INHERIT',
}

export const useFailTypeHelpers = () => {
  const failTypeEnumOptions = [
    { value: FailType.EXPIRED, label: '因過期' },
    { value: FailType.DEAD, label: '因死亡' },
    { value: FailType.DEAD_INHERIT, label: '因死亡但有繼受人' },
  ]
  const getFailTypeText = createGetOptionTextFn(failTypeEnumOptions)
  return { failTypeEnumOptions, getFailTypeText }
}
