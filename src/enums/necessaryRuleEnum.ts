import { createGetOptionTextFn } from '@/utils'

export enum NecessaryRule {
  NECESSARY = 'NECESSARY',
  NO_NECESSARY = 'NO_NECESSARY',
  NECESSARY_ONE = 'NECESSARY_ONE',
}

export const useNecessaryRuleHelpers = () => {
  const necessaryRuleEnumOptions = [
    { value: NecessaryRule.NECESSARY, label: '必填' },
    { value: NecessaryRule.NECESSARY_ONE, label: '選一必填' },
    { value: NecessaryRule.NO_NECESSARY, label: '非必填' },
  ]
  const getNecessaryRuleText = createGetOptionTextFn(necessaryRuleEnumOptions)
  return { necessaryRuleEnumOptions, getNecessaryRuleText }
}
