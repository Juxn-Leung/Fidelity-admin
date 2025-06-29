import { createGetOptionTextFn } from '@/utils'

export enum ConfigureType {
  DOMESTIC_VIOLENCE_RECORD = 'DOMESTIC_VIOLENCE_RECORD',
  PAYMENT_NOTICE_AGENT = 'PAYMENT_NOTICE_AGENT',
  PAYMENT_NOTICE_ARBITRATION = 'PAYMENT_NOTICE_ARBITRATION',
  REFUND_RECORD = 'REFUND_RECORD',
  RESOLUTION = 'RESOLUTION',
  UNIVERSAL_SENDING = 'UNIVERSAL_SENDING',
  INVESTIGATION_TASK_SENDING = 'INVESTIGATION_TASK_SENDING',
  INVESTIGATION_SIGN_TEMPLATE = 'INVESTIGATION_SIGN_TEMPLATE',
  CONSULTATION_LETTER_TEMPLATE = 'CONSULTATION_LETTER_TEMPLATE',
}

export const useConfigureTypeHelpers = () => {
  const configureTypeEnumOptions = [
    {
      value: ConfigureType.DOMESTIC_VIOLENCE_RECORD,
      label: '家暴通報記錄模板',
      parent: '資料庫配置',
      path: 'domestic-violence-record',
    },
    {
      value: ConfigureType.PAYMENT_NOTICE_AGENT,
      label: '代理人付款通知模板',
      parent: '資料庫配置',
      path: 'payment-notice-agent',
    },
    {
      value: ConfigureType.PAYMENT_NOTICE_ARBITRATION,
      label: '仲裁機構付款通知模板',
      parent: '資料庫配置',
      path: 'payment-notice-arbitration',
    },
    {
      value: ConfigureType.REFUND_RECORD,
      label: '退款記錄模板',
      parent: '資料庫配置',
      path: 'refund-record',
    },
    { 
      value: ConfigureType.RESOLUTION, 
      label: '決議模板', 
      parent: '會議配置',
      path: 'resolution',
    },
    {
      value: ConfigureType.UNIVERSAL_SENDING,
      label: '單獨發件模板',
      parent: '通用模塊配置',
      path: 'universal-sending',
    },
    {
      value: ConfigureType.INVESTIGATION_TASK_SENDING,
      label: '調查任務發函模板',
      parent: '調查配置',
      path: 'investigation-task-sending',
    },
    {
      value: ConfigureType.INVESTIGATION_SIGN_TEMPLATE,
      label: '簽收紙模板',
      parent: '通用模塊配置',
      path: 'investigation-sign-template',
    },
    {
      value: ConfigureType.CONSULTATION_LETTER_TEMPLATE,
      label: '諮詢回信模板',
      parent: '通用模塊配置',
      path: 'consultation-letter-template',
    },
  ]
  const getConfigureTypeLabel = createGetOptionTextFn(configureTypeEnumOptions)
  const getConfigureTypeParent = (value: string) => {
    return configureTypeEnumOptions.find((ele) => ele.value === value)?.parent
  }
  const getConfigureTypeValue = (path: string) => {
    return configureTypeEnumOptions.find((ele) => ele.path === path)?.value
  }
  return {
    configureTypeEnumOptions,
    getConfigureTypeLabel,
    getConfigureTypeParent,
    getConfigureTypeValue,
  }
}
