import { createGetOptionTextFn } from '@/utils'
export enum TodoSourceType {
  DISTRIBUTION_DISTRIBUTION = 'DISTRIBUTION_DISTRIBUTION',
  DISTRIBUTION_ACCEPTING = 'DISTRIBUTION_ACCEPTING',
  DISTRIBUTION_REDISTRIBUTION = 'DISTRIBUTION_REDISTRIBUTION',
}

export const useTodoSourceTypeHelpers = () => {
  const todoSourceTypeEnumOptions = [
    { value: TodoSourceType.DISTRIBUTION_DISTRIBUTION, label: '分發程序（新申請）' },
    { value: TodoSourceType.DISTRIBUTION_ACCEPTING, label: '持檔人待接收（新申請）' },
    { value: TodoSourceType.DISTRIBUTION_REDISTRIBUTION, label: '分發程序（重新分發）' },
  ]
  const getTodoSourceTypeText = createGetOptionTextFn(todoSourceTypeEnumOptions)
  return { todoSourceTypeEnumOptions, getTodoSourceTypeText }
}
