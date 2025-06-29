import { createGetOptionTextFn } from '@/utils'

export enum AidType {
  LAWSUIT_PREPAYMENT = 'LAWSUIT_PREPAYMENT',
  LAWSUIT_FEE = 'LAWSUIT_FEE',
  ARBITRATION_PREPAYMENT = 'ARBITRATION_PREPAYMENT',
  ARBITRATION_COST = 'ARBITRATION_COST',
  AGENT_COST = 'AGENT_COST',
}

export const useAidTypeHelpers = () => {
  const aidTypeEnumOptions = [
    { value: AidType.LAWSUIT_PREPAYMENT, label: '豁免支付預付金（訴訟）', type: 'LAWSUIT' },
    { value: AidType.LAWSUIT_FEE, label: '豁免支付訴訟費用', type: 'LAWSUIT' },
    {
      value: AidType.ARBITRATION_PREPAYMENT,
      label: '豁免支付預付金（仲裁）',
      type: 'ARBITRATION',
    },
    { value: AidType.ARBITRATION_COST, label: '豁免支付仲裁負擔', type: 'ARBITRATION' },
    { value: AidType.AGENT_COST, label: '委任在法院的代理人和支付代理費用', type: 'LAWSUIT' },
  ]
  const getAidTypeText = createGetOptionTextFn(aidTypeEnumOptions)
  return { aidTypeEnumOptions, getAidTypeText }
}
