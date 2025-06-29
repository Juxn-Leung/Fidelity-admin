import { createGetOptionTextFn } from '@/utils'

export enum CaseStageType {
  // 訴訟
  FIRST_MAJOR = 'FIRST_MAJOR',  // 一審-主案
  FIRST_ATTACH = 'FIRST_ATTACH',  // 一審-附案
  MID_APPEAL = 'MID_APPEAL',  // 中級-上訴案
  MID_ATTACH = 'MID_ATTACH',  // 中級-附案
  END_APPEAL = 'END_APPEAL',  // 終審-上訴案
  END_ATTACH = 'END_ATTACH',  // 終審-附案
  SELF_APPEAL_MAJOR = 'SELF_APPEAL_MAJOR',    // 自訴-主案
  PRE_APPROVE_MAJOR = 'PRE_APPROVE_MAJOR',    // 預審-主案
  MID_MAJOR = 'MID_MAJOR',    // 中級-主案
  END_MAJOR = 'END_MAJOR',    // 終審-主案
  // 仲裁
  MAJOR = 'MAJOR',  // 主案
}

export const useCaseStageTypeHelpers = () => {
  const litigationStageType = [
    { value: CaseStageType.FIRST_MAJOR, label: '一審（主案）' },
    { value: CaseStageType.FIRST_ATTACH, label: '一審（附案）' },
    { value: CaseStageType.MID_MAJOR, label: '中級（主案）' },
    { value: CaseStageType.MID_ATTACH, label: '中級（附案）' },
    { value: CaseStageType.MID_APPEAL, label: '中級（上訴案）' },
    { value: CaseStageType.END_APPEAL, label: '終審（上訴案）' },
    { value: CaseStageType.END_MAJOR, label: '終審（主案）' },
    { value: CaseStageType.END_ATTACH, label: '終審（附案）' },
    { value: CaseStageType.SELF_APPEAL_MAJOR, label: '自訴（主案）' },
    { value: CaseStageType.PRE_APPROVE_MAJOR, label: '預審（主案）' },
  ]
  const arbitrationStageType = [{ value: CaseStageType.MAJOR, label: '主案' }]
  const getStageTypeText = createGetOptionTextFn([...litigationStageType, ...arbitrationStageType])

  return {
    litigationStageType,
    arbitrationStageType,
    getStageTypeText,
  }
}
