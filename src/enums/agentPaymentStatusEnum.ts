import { createGetOptionTextFn } from '@/utils'

export enum AgentPaymentStatus {
  SUBMITTED = 'SUBMITTED',
  COMPLETED = 'COMPLETED',
}

export const useAgentPaymentStatusHelpers = () => {
  const agentPaymentStatusEnumOptions = [
    { value: AgentPaymentStatus.SUBMITTED, label: '處理中' },
    { value: AgentPaymentStatus.COMPLETED, label: '已完成' },
  ]
  const getAgentPaymentStatusText = createGetOptionTextFn(agentPaymentStatusEnumOptions)
  return { agentPaymentStatusEnumOptions, getAgentPaymentStatusText }
}
