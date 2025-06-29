import { createGetOptionTextFn } from '@/utils'

export enum ReviewType {
  SENDING = 'SENDING',
  RECEIVING = 'RECEIVING',
  REVIEW_PROCESS = 'REVIEW_PROCESS',
  MEETING = 'MEETING',
  MEETING_RECORD = 'MEETING_RECORD',
  RESOLUTION = 'RESOLUTION',
  SERVICE_DOMESTIC_VIOLENCE='SERVICE_DOMESTIC_VIOLENCE',
  CANCEL_NEW_APPLY = 'CANCEL_NEW_APPLY',
}

export const useReviewTypeHelpers = () => {
  const reviewTypeEnumOptions = [
    { value: ReviewType.SENDING, label: '發件' },
    { value: ReviewType.RECEIVING, label: '收件' },
    { value: ReviewType.REVIEW_PROCESS, label: '業務_檢閱流程' },
    { value: ReviewType.MEETING, label: '會議' },
    { value: ReviewType.MEETING_RECORD, label: '會議記錄' },
    { value: ReviewType.RESOLUTION, label: '決議' },
    { value: ReviewType.SERVICE_DOMESTIC_VIOLENCE, label: '家暴通報記錄' },
    { value: ReviewType.CANCEL_NEW_APPLY, label: '取消申請登記' },
  ]
  const getReviewTypeText = createGetOptionTextFn(
    reviewTypeEnumOptions
  )
  return { reviewTypeEnumOptions, getReviewTypeText }
}
