import { createGetOptionTextFn } from '@/utils'
export enum TodoMessageStatus {
  UNREAD = 'UNREAD',
  READ = 'READ',
}

export const useTodoMessageStatusHelpers = () => {
  const TodoMessageStatusEnumOptions = [
    { value: TodoMessageStatus.UNREAD, label: '未讀' },
    { value: TodoMessageStatus.READ, label: '已讀' },
  ]
  const getTodoMessageStatusText = createGetOptionTextFn(TodoMessageStatusEnumOptions)
  return { TodoMessageStatusEnumOptions, getTodoMessageStatusText }
}
