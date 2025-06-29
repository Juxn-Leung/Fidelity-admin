import { createGetOptionTextFn } from '@/utils'

export enum InspectStatus {
  INSPECTED = 'INSPECTED',
  INSPECTING = 'INSPECTING',
  UNINSPECT = 'UNINSPECT',
}

export const useFlowTypeHelpers = () => {
  const inspectStatusEnumOptions = [
    { value: InspectStatus.INSPECTED, label: '已檢閱' },
    { value: InspectStatus.INSPECTING, label: '檢閱中' },
    { value: InspectStatus.UNINSPECT, label: '未檢閱' },
  ]
  const getInspectStatusText = createGetOptionTextFn(inspectStatusEnumOptions)
  return { inspectStatusEnumOptions, getInspectStatusText }
}
