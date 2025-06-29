import { createGetOptionTextFn } from '@/utils'
export enum TodoUserTypeEnum {
  TO = 'TO',
  CC = 'CC',
}

export const useTodoUserTypeEnumHelpers = () => {
  const TodoUserTypeEnumEnumOptions = [
    { value: TodoUserTypeEnum.TO, label: '跟進人' },
    { value: TodoUserTypeEnum.CC, label: '抄送人' },
  ]
  const getTodoUserTypeEnumText = createGetOptionTextFn(TodoUserTypeEnumEnumOptions)
  return { TodoUserTypeEnumEnumOptions, getTodoUserTypeEnumText }
}
