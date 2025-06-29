import { createGetOptionTextFn } from '@/utils'

export enum StakeholderType {
  OTHER_PARTIES = 'OTHER_PARTIES',
  OTHER_PARTIES_AGENT = 'OTHER_PARTIES_AGENT',
  LAW_RELATED_PARTIES = 'LAW_RELATED_PARTIES',
  LAW_RELATED_PARTIES_AGENT = 'LAW_RELATED_PARTIES_AGENT',
  OTHER_AGENT = 'OTHER_AGENT',
}

export const useStakeholderTypeHelpers = () => {
  const stakeholderTypeEnumOptions = [
    { value: StakeholderType.OTHER_PARTIES, label: '他方當事人' },
    { value: StakeholderType.OTHER_PARTIES_AGENT, label: '他方當事人的代理人' },
    { value: StakeholderType.LAW_RELATED_PARTIES, label: '案件的利害關係人' },
    {
      value: StakeholderType.LAW_RELATED_PARTIES_AGENT,
      label: '案件的利害關係人的代理人',
    },
    { value: StakeholderType.OTHER_AGENT, label: '其他代理人' },
  ]
  const getStakeholderTypeEnumText = createGetOptionTextFn(
    stakeholderTypeEnumOptions
  )
  return { stakeholderTypeEnumOptions, getStakeholderTypeEnumText }
}
