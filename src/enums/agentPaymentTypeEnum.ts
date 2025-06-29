import { createGetOptionTextFn } from '@/utils'

export enum AgentPaymentType {
  AGENT_REPORT = 'AGENT_REPORT',
  AGENT_PREPAYMENT = 'AGENT_PREPAYMENT',
}

export const useAgentPaymentTypeHelpers = () => {
  const agentPaymentTypeEnumOptions = [
    { value: AgentPaymentType.AGENT_REPORT, label: '代理人報告' },
    { value: AgentPaymentType.AGENT_PREPAYMENT, label: '代理人預付請求' },
  ]
  const getAgentPaymentTypeText = createGetOptionTextFn(agentPaymentTypeEnumOptions)
  return { agentPaymentTypeEnumOptions, getAgentPaymentTypeText }
}
