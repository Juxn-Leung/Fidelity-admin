import { createGetOptionTextFn } from '@/utils'

export enum DealTimeRule {
  FINISH = 'FINISH',
  FINISH_LATER = 'FINISH_LATER',
}

export const useDealTimeRuleHelpers = () => {
  const dealTimeRuleEnumOptions = [
    { value: DealTimeRule.FINISH, label: '以業務完成日作為開始處理時間' },
    {
      value: DealTimeRule.FINISH_LATER,
      label: '以業務完成後N天作為開始處理時間',
    },
  ]
  const getDealTimeRuleText = createGetOptionTextFn(dealTimeRuleEnumOptions)
  return { dealTimeRuleEnumOptions, getDealTimeRuleText }
}
