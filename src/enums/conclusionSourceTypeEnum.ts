import { createGetOptionTextFn } from '@/utils'

export enum ConclusionSourceType {
  UNIVERSAL = 'UNIVERSAL',
  REPEAL_BEFORE = 'REPEAL_BEFORE',
  REPEALING = 'REPEALING',
  REPEAL_AFTER = 'REPEAL_AFTER',
  REPEAL_CANCEL = 'REPEAL_CANCEL',
  // REPEAL_END = 'REPEAL_END',
  // PAY_REVIEW_ARBITRATION = 'PAY_REVIEW_ARBITRATION',
  // PAY_REVIEW_AGENT_PREPAYMENT = 'PAY_REVIEW_AGENT_PREPAYMENT',
  // PAY_REVIEW_AGENT_REPORT = 'PAY_REVIEW_AGENT_REPORT',
}

export const useConclusionSourceTypeHelpers = () => {
  const conclusionSourceTypeEnumOptions = [
    { value: ConclusionSourceType.UNIVERSAL, label: '一般業務' },
    { value: ConclusionSourceType.REPEAL_BEFORE, label: '司法申訴_法院前' },
    { value: ConclusionSourceType.REPEALING, label: '司法申訴_法院審理' },
    { value: ConclusionSourceType.REPEAL_AFTER, label: '司法申訴_法院後' },
    { value: ConclusionSourceType.REPEAL_CANCEL, label: '司法申訴_取消' },
    // { value: ConclusionSourceType.REPEAL_END, label: '司法申訴_最終結果' },
    // {
    //   value: ConclusionSourceType.PAY_REVIEW_ARBITRATION,
    //   label: '付款評審（仲裁機構）',
    // },
    // {
    //   value: ConclusionSourceType.PAY_REVIEW_AGENT_PREPAYMENT,
    //   label: '付款評審（代理人預付請求）',
    // },
    // {
    //   value: ConclusionSourceType.PAY_REVIEW_AGENT_REPORT,
    //   label: '付款評審（代理人報告）',
    // },
  ]
  const getConclusionSourceTypeText = createGetOptionTextFn(
    conclusionSourceTypeEnumOptions
  )
  return { conclusionSourceTypeEnumOptions, getConclusionSourceTypeText }
}
