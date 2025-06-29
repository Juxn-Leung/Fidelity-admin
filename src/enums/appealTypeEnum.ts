import { createGetOptionTextFn } from '@/utils'

export enum AppealType {
  REJECTED_APPROVAL = 'REJECTED_APPROVAL',
  REPEAL_APPROVAL = 'REPEAL_APPROVAL',
  APPROVAL_REPEAL = 'APPROVAL_REPEAL',
}

export const useAppealTypeHelpers = () => {
  const appealTypeEnumOptions = [
    { value: AppealType.REJECTED_APPROVAL, label: '不批給改為批給後跟進' },
    { value: AppealType.REPEAL_APPROVAL, label: '廢止改為批給後跟進' },
    { value: AppealType.APPROVAL_REPEAL, label: '批給後跟進改為廢止' },
  ]
  const getAppealTypeText = createGetOptionTextFn(appealTypeEnumOptions)
  return { appealTypeEnumOptions, getAppealTypeText }
}
