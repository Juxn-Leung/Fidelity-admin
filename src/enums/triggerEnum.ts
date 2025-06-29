import { createGetOptionTextFn } from '@/utils'

export enum Trigger {
  ANY = 'ANY',
  PART = 'PART',
}

export const useTriggerHelpers = () => {
  const triggerEnumOptions = [
    { value: Trigger.PART, label: '選擇特定的業務對象' },
    { value: Trigger.ANY, label: '選擇任意的業務對象' },
  ]
  const getTriggerText = createGetOptionTextFn(triggerEnumOptions)
  return { triggerEnumOptions, getTriggerText }
}
