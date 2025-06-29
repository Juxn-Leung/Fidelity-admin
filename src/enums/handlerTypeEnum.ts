import { createGetOptionTextFn } from '@/utils'

export enum HandlerType {
  NON_HANDLER = 'NON_HANDLER',
  REGULAR_HANDLER = 'REGULAR_HANDLER',
  USED_HANDLER_NON_APPLICATION = 'USED_HANDLER_NON_APPLICATION',
  USED_HANDLER_APPLICATION = 'USED_HANDLER_APPLICATION',
}

export const useHandlerTypeHelpers = () => {
  const handlerTypeEnumOptions = [
    { value: HandlerType.NON_HANDLER, label: '非持檔人' },
    { value: HandlerType.REGULAR_HANDLER, label: '正式持檔人' },
    { value: HandlerType.USED_HANDLER_NON_APPLICATION, label: '曾任持檔人-無關聯個案' },
    { value: HandlerType.USED_HANDLER_APPLICATION, label: '曾任持檔人-仍關聯個案' },
  ]
  const getHandlerTypeText = createGetOptionTextFn(handlerTypeEnumOptions)
  return { handlerTypeEnumOptions, getHandlerTypeText }
}
