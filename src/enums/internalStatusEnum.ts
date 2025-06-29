import { createGetOptionTextFn } from '@/utils'

export enum InternalStatus {
  APPLICATION_IN_PROGRESS = 'APPLICATION_IN_PROGRESS',
  NOT_APPROVED = 'NOT_APPROVED',
  APPROVED_FLLOW = 'APPROVED_FLLOW',
  DECLARE_FAIL = 'DECLARE_FAIL',
  CANCEL = 'CANCEL',
  ABOLISH = 'ABOLISH',
  DEATH_SUCCESSOR = 'DEATH_SUCCESSOR',
  OTHER_DECISION = 'OTHER_DECISION',
  UNARCHIVED = 'UNARCHIVED',
  ARCHIVED = 'ARCHIVED',
  LOGOUT = 'LOGOUT',
  OTHER_NO_DECISION = 'OTHER_NO_DECISION',
  OTHER_DECISION_ARCHIVE = 'OTHER_DECISION_ARCHIVE',
  OTHER_DECISION_APPLICANT_DEAD = 'OTHER_DECISION_APPLICANT_DEAD',
  OTHER_DECISION_MERGE_OTHER = 'OTHER_DECISION_MERGE_OTHER',
  OTHER_DECISION_EXTEND_OTHER = 'OTHER_DECISION_EXTEND_OTHER',
}

export const useInternalStatusHelpers = () => {
  const internalStatusEnumOptions = [
    { value: InternalStatus.APPLICATION_IN_PROGRESS, label: '申請中' },
    { value: InternalStatus.NOT_APPROVED, label: '不批給' },
    { value: InternalStatus.APPROVED_FLLOW, label: '批給後跟進' },
    { value: InternalStatus.DECLARE_FAIL, label: '宣告失效' },
    { value: InternalStatus.CANCEL, label: '取消' },
    { value: InternalStatus.ABOLISH, label: '廢止' },
    { value: InternalStatus.DEATH_SUCCESSOR, label: '死亡後繼受' },
    { value: InternalStatus.UNARCHIVED, label: '未存檔' },
    { value: InternalStatus.ARCHIVED, label: '已存檔' },
    { value: InternalStatus.LOGOUT, label: '註銷' },
    { value: InternalStatus.OTHER_NO_DECISION, label: '其他（不作決定）' },
    {
      value: InternalStatus.OTHER_DECISION_ARCHIVE,
      label: '其他（決定）-歸檔',
    },
    {
      value: InternalStatus.OTHER_DECISION_APPLICANT_DEAD,
      label: '其他（決定）-申請人死亡',
    },
    {
      value: InternalStatus.OTHER_DECISION_MERGE_OTHER,
      label: '其他（決定）-合併至另一申請',
    },
    {
      value: InternalStatus.OTHER_DECISION_EXTEND_OTHER,
      label: '其他（決定）-延伸至另一申請',
    },
  ]
  const getInternalStatusText = createGetOptionTextFn(internalStatusEnumOptions)
  return { internalStatusEnumOptions, getInternalStatusText }
}
