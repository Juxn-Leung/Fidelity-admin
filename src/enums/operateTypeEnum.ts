import { createGetOptionTextFn } from '@/utils'

export enum Status {
  NEW_UPLOAD = 'NEW_UPLOAD',
  SUBMIT_UPDATE = 'SUBMIT_UPDATE',
  COMPLETE_UPDATE = 'COMPLETE_UPDATE',
  DELETE = 'DELETE',
  SAVE_SUCCESS = 'SAVE_SUCCESS',
}
export const useOperateTypeHelpers = () => {
  const operateTypeEnumOptions = [
    { value: Status.NEW_UPLOAD, label: '新傳入' },
    { value: Status.SUBMIT_UPDATE, label: '提交編輯' },
    { value: Status.COMPLETE_UPDATE, label: '完成編輯' },
    { value: Status.DELETE, label: '刪除' },
    { value: Status.SAVE_SUCCESS, label: '保存成功' },
  ]
  const getOperateTypeText = createGetOptionTextFn(operateTypeEnumOptions)
  return { operateTypeEnumOptions, getOperateTypeText }
}
