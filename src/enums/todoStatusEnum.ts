import { createGetOptionTextFn } from '@/utils'
export enum TodoStatus {
  TO_DO = 'TO_DO',
  DONE = 'DONE',
  NO_NEED = 'NO_NEED',
  CANCEL = 'CANCEL',
  CC= 'CC',
}

export const useTodoStatusHelpers = () => {
  const todoStatusEnumOptions = [
    { value: TodoStatus.TO_DO, label: '待處理' },
    { value: TodoStatus.DONE, label: '已處理' },
    { value: TodoStatus.NO_NEED, label: '無需處理' },
    { value: TodoStatus.CANCEL, label: '取消' },
    { value: TodoStatus.CC, label: '抄送' },
    { value: '', label: '全部待辦' }
  ]
  const getTodoStatusText = createGetOptionTextFn(todoStatusEnumOptions)
  return { todoStatusEnumOptions, getTodoStatusText }
}
