import { createGetOptionTextFn } from '@/utils'

export enum TableType {
  APPLICATION_CASE = 'APPLICATION_CASE',
  FAMILY_MEMBER = 'FAMILY_MEMBER',
  RECORD_HANDLER = 'RECORD_HANDLER',
  RECORD_APPLICATION_PROXY = 'RECORD_APPLICATION_PROXY',
  RECORD_CASE = 'RECORD_CASE',
  RECORD_AID_RANGE = 'RECORD_AID_RANGE',
  RECORD_STAKE_HOLDER = 'RECORD_STAKE_HOLDER',
  RECORD_CASE_PROXY = 'RECORD_CASE_PROXY',
  RECORD_GUARDIAN = 'RECORD_GUARDIAN',
  RECORD_PROXY_APPOINT_HISTORY = 'RECORD_PROXY_APPOINT_HISTORY',
  RECORD_PROXY_OTHER_SERVICE = 'RECORD_PROXY_OTHER_SERVICE',
}

export const useTableTypeHelpers = () => {
  const tableTypeEnumOptions = [
    { value: TableType.APPLICATION_CASE, label: '申請個案' },
    { value: TableType.FAMILY_MEMBER, label: '業務記錄_家團成員' },
    { value: TableType.RECORD_HANDLER, label: '業務記錄_持檔人' },
    { value: TableType.RECORD_APPLICATION_PROXY, label: '業務記錄_申請個案委任的代理人' },
    { value: TableType.RECORD_CASE, label: '業務記錄_法律案件' },
    { value: TableType.RECORD_AID_RANGE, label: '業務記錄_援助範圍' },
    { value: TableType.RECORD_STAKE_HOLDER, label: '業務記錄_案件關係人' },
    { value: TableType.RECORD_CASE_PROXY, label: '業務記錄_案件的代理人代理記錄' },
    { value: TableType.RECORD_GUARDIAN, label: '業務記錄_監護人或保佐人' },
    { value: TableType.RECORD_PROXY_APPOINT_HISTORY, label: '業務記錄_代理人的委任歷史' },
    { value: TableType.RECORD_PROXY_OTHER_SERVICE, label: '業務記錄_代理人其他服務記錄' },
  ]
  const getTableTypeText = createGetOptionTextFn(tableTypeEnumOptions)
  return { tableTypeEnumOptions, getTableTypeText }
}
