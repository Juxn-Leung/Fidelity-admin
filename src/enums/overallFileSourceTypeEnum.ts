import { createGetOptionTextFn } from '@/utils'

export enum OverallFileSourceType {
  APPLICATION = 'APPLICATION',
//   RECEIVE = 'RECEIVE',
//   RECEIVE_ASSIGNMENT = 'RECEIVE_ASSIGNMENT',
//   SEND_RECORD = 'SEND_RECORD',
//   SEND_SINGLE = 'SEND_SINGLE',
//   INVESTIGATION = 'INVESTIGATION',
//   MEETING = 'MEETING',
//   RESOLUTION = 'RESOLUTION',
//   APPEAL_RECORD = 'APPEAL_RECORD',
//   FAMILY_ABUSE = 'FAMILY_ABUSE',
//   LAWSUIT_NOTICE = 'LAWSUIT_NOTICE',
//   COURT_NOTICE = 'COURT_NOTICE',
//   ARBITRATION_NOTICE = 'ARBITRATION_NOTICE',
//   AGENT_PREPAYMENT_REQUEST = 'AGENT_PREPAYMENT_REQUEST',
//   AGENT_REPORT = 'AGENT_REPORT',
//   AGENT_NO_SERVICE_FEE_RECORD = 'AGENT_NO_SERVICE_FEE_RECORD',
//   PAYMENT_NOTICE_ARBITRATION = 'PAYMENT_NOTICE_ARBITRATION',
//   PAYMENT_NOTICE_AGENT = 'PAYMENT_NOTICE_AGENT',
//   REFUND_RECORD = 'REFUND_RECORD',
//   BUSINESS_SUBMIT = 'BUSINESS_SUBMIT',
//   BUSINESS_RESULT = 'BUSINESS_RESULT',
//   CONSULTATION = 'CONSULTATION',
}

export const useOverallFileSourceTypeHelpers = () => {
  const overallFileSourceTypeEnumOptions = [
    { value: OverallFileSourceType.APPLICATION, label: '申請個案' },
    // { value: OverallFileSourceType.RECEIVE, label: '收件' },
    // { value: OverallFileSourceType.RECEIVE_ASSIGNMENT, label: '收件_分派記錄' },
    // { value: OverallFileSourceType.SEND_RECORD, label: '寄件資料' },
    // { value: OverallFileSourceType.SEND_SINGLE, label: '發件_單獨發件' },
    // { value: OverallFileSourceType.INVESTIGATION, label: '調查內容' },
    // { value: OverallFileSourceType.MEETING, label: '會議記錄' },
    // { value: OverallFileSourceType.RESOLUTION, label: '決議' },
    // { value: OverallFileSourceType.APPEAL_RECORD, label: '司法申訴' },
    // { value: OverallFileSourceType.FAMILY_ABUSE, label: '家暴通報' },
    // { value: OverallFileSourceType.LAWSUIT_NOTICE, label: '律師公會通知' },
    // { value: OverallFileSourceType.COURT_NOTICE, label: '法院通知' },
    // { value: OverallFileSourceType.ARBITRATION_NOTICE, label: '仲裁機構通知' },
    // {
    //   value: OverallFileSourceType.AGENT_PREPAYMENT_REQUEST,
    //   label: '代理人預付請求',
    // },
    // { value: OverallFileSourceType.AGENT_REPORT, label: '代理人報告' },
    // {
    //   value: OverallFileSourceType.AGENT_NO_SERVICE_FEE_RECORD,
    //   label: '代理人不收服務費記錄',
    // },
    // {
    //   value: OverallFileSourceType.PAYMENT_NOTICE_ARBITRATION,
    //   label: '付款通知_仲裁機構',
    // },
    // {
    //   value: OverallFileSourceType.PAYMENT_NOTICE_AGENT,
    //   label: '付款通知_代理人',
    // },
    // { value: OverallFileSourceType.REFUND_RECORD, label: '退款記錄' },
    // { value: OverallFileSourceType.BUSINESS_SUBMIT, label: '業務遞交物' },
    // { value: OverallFileSourceType.BUSINESS_RESULT, label: '業務結果物' },
    // { value: OverallFileSourceType.CONSULTATION, label: '諮詢' },
  ]
  const getOverallFileSourceTypeText = createGetOptionTextFn(
    overallFileSourceTypeEnumOptions
  )
  return { overallFileSourceTypeEnumOptions, getOverallFileSourceTypeText }
}
