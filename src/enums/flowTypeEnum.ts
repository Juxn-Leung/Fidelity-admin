import { createGetOptionTextFn } from '@/utils'

export enum FlowType {
  NEW = 'NEW',
  APPEAL = 'APPEAL',
  DELIBERATION = 'DELIBERATION',
  REVIEW = 'REVIEW',
  DISTRIBUTION = 'DISTRIBUTION',
}

export const useFlowTypeHelpers = () => {
  const flowTypeEnumOptions = [
    { value: FlowType.NEW, label: '定製流程階段（新申請個案）' },
    { value: FlowType.APPEAL, label: '定製流程階段（司法申訴）' },
    { value: FlowType.DELIBERATION, label: '審議流程（通用）' },
    { value: FlowType.REVIEW, label: '檢閱流程（通用）' },
    { value: FlowType.DISTRIBUTION, label: '分發流程（通用）' },
  ]
  const getFlowTypeText = createGetOptionTextFn(flowTypeEnumOptions)
  return { flowTypeEnumOptions, getFlowTypeText }
}
