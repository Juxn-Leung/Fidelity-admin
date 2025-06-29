import { createGetOptionTextFn } from '@/utils'

export enum RelatedType {
  APPLICATION_SUBMISSION = 'APPLICATION_SUBMISSION',
  APPLICATION_VOUCHER_DRAFT = 'APPLICATION_VOUCHER_DRAFT',
  REPLENISH_TASK = 'REPLENISH_TASK',
  REPORT_DRAFT = 'REPORT_DRAFT',
  PROPERTY_INFO = 'PROPERTY_INFO',
}

export const useRelatedTypeHelpers = () => {
  const relatedTypeEnumOptions = [
    // { value: RelatedType.APPLICATION_SUBMISSION, label: '申請遞交物' },
    { value: RelatedType.APPLICATION_VOUCHER_DRAFT, label: '申請憑證草稿' },
    { value: RelatedType.REPLENISH_TASK, label: '補交資料任務' },
    { value: RelatedType.REPORT_DRAFT, label: '報告物草稿' },
    { value: RelatedType.PROPERTY_INFO, label: '財產資料' },
  ]
  const getRelatedTypeText = createGetOptionTextFn(relatedTypeEnumOptions)
  return { relatedTypeEnumOptions, getRelatedTypeText }
}
