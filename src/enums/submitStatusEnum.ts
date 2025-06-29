import { createGetOptionTextFn } from '@/utils'

export enum SubmitStatus {
  DRAFT = 'DRAFT',
  RECEIVED = 'RECEIVED',
  SUBMITTED = 'SUBMITTED',
}

export const useSubmitStatusHelpers = () => {
  const submitStatusEnumOptions = [
    { value: SubmitStatus.DRAFT, label: '草稿' },
    { value: SubmitStatus.RECEIVED, label: '已接收' },
    { value: SubmitStatus.SUBMITTED, label: '已提交' },
  ]
  const consultationStatusEnumOptions = [
    { value: SubmitStatus.DRAFT, label: '草稿' },
    { value: SubmitStatus.RECEIVED, label: '已接收' },
  ]
  const getSubmitStatusText = createGetOptionTextFn(submitStatusEnumOptions)
  return { submitStatusEnumOptions, consultationStatusEnumOptions, getSubmitStatusText }
}
