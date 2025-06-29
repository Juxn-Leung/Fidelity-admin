import { createGetOptionTextFn } from '@/utils'

export enum FlowStageType {
  DELIBERATION = 'DELIBERATION',
  DELIBERATION_BEFORE = 'DELIBERATION_BEFORE',
  APPEAL = 'APPEAL',
  DELIBERATION_AFTER = 'DELIBERATION_AFTER',
  DELIBERATION_CANCEL = 'DELIBERATION_CANCEL',
  REVIEW = 'REVIEW',
  DISTRIBUTION = 'DISTRIBUTION',
}

export const useFlowStageTypeHelpers = () => {
  const flowStageTypeEnumOptions = [
    { value: FlowStageType.DELIBERATION, label: '審議階段' },
    { value: FlowStageType.DELIBERATION_BEFORE, label: '審議階段（法院前）' },
    { value: FlowStageType.APPEAL, label: '法院審理申訴階段' },
    { value: FlowStageType.DELIBERATION_AFTER, label: '審議階段（法院後）' },
    { value: FlowStageType.DELIBERATION_CANCEL, label: '審議階段（取消司法申訴）' },
    { value: FlowStageType.REVIEW, label: '檢閱階段' },
    { value: FlowStageType.DISTRIBUTION, label: '分發階段' },
  ]
  const getFlowStageTypeText = createGetOptionTextFn(flowStageTypeEnumOptions)
  return { flowStageTypeEnumOptions, getFlowStageTypeText }
}
