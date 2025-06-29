import { createGetOptionTextFn } from '@/utils'

export enum AppealStageType {
  DELIBERATION_BEFORE = 'DELIBERATION_BEFORE',
  APPEAL = 'APPEAL',
  DELIBERATION_AFTER = 'DELIBERATION_AFTER',
  DELIBERATION_CANCEL = 'DELIBERATION_CANCEL',
}

export const useAppealStageTypeHelpers = () => {
  const appealStageTypeEnumOptions = [
    { value: AppealStageType.DELIBERATION_BEFORE, label: '審議階段（法院前）' },
    { value: AppealStageType.APPEAL, label: '法院審理申訴階段' },
    { value: AppealStageType.DELIBERATION_AFTER, label: '審議階段（法院後）' },
    { value: AppealStageType.DELIBERATION_CANCEL, label: '取消司法申訴' },
  ]
  const getAppealStageTypeText = createGetOptionTextFn(
    appealStageTypeEnumOptions
  )
  return { appealStageTypeEnumOptions, getAppealStageTypeText }
}
