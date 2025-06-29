import { createGetOptionTextFn } from '@/utils'

export enum ModifiedType {
  ADD = 'ADD',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

export const useModifiedTypeHelpers = () => {
  const modifiedTypeEnumOptions = [
    { value: ModifiedType.ADD, label: '新增' },
    { value: ModifiedType.UPDATE, label: '修改' },
    { value: ModifiedType.DELETE, label: '刪除' },
  ]
  const getModifiedTypeText = createGetOptionTextFn(modifiedTypeEnumOptions)
  return { modifiedTypeEnumOptions, getModifiedTypeText }
}
