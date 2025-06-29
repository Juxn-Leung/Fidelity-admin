import { validateInfo } from '@/utils/form'
import { useSelector } from 'react-redux'

function useFormProps(required: boolean) {
  const {
    objectTypeList,
    necessaryRule,
    trigger,
    handleTimeRule,
    flagList,
    businessResultType,
    situationUserObject,
    situationResult,
  } = useSelector((store: any) => store.app)

  return {
    necessaryRuleSelectProps: {
      label: '同一對象的必填情況',
      name: 'necessaryRule',
      list: {
        list: necessaryRule,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    triggerSituationProps: {
      label: '觸發場景',
      name: 'situation',
      list: {
        list: trigger,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    objectTypeProps: {
      label: '業務對象類型',
      name: 'objectType',
      list: {
        list: objectTypeList,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    objectsProps: {
      label: '業務對象',
      name: 'objects',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      // required: required,
    },

    situationProps: {
      label: '應用場景（針對業務結果）',
      name: 'situationResult',
      list: {
        list: situationResult,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    businessResultInputProps: {
      label: '業務結果',
      name: 'businessResultId',
      list: {
        list: businessResultType,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    generateRuleProps: {
      label: '應用場景（針對業務對象）',
      name: 'situationUserObject',
      list: {
        list: situationUserObject,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    userObjectTypeProps: {
      label: '業務對象類型',
      name: 'objectType',
      list: {
        list: objectTypeList,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    handleTimeRuleSelectProps: {
      label: '處理時間規則',
      name: 'dealTimeRule',
      list: {
        list: handleTimeRule,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    dealTimeRuleDaysInputProps: {
      label: '業務完成後處理時間',
      name: 'ruleTimeStart',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    existenceOrNotRadioProps: {
      label: '是否存在結果物模板',
      name: 'existenceOrNot',
      list: {
        list: flagList,
        value: 'id',
        label: 'nameTc',
      },
    },
    nameTcInputProps: {
      label: '名稱(中文)',
      name: 'nameTc',
      formProps: required && {
        rules: [...validateInfo.maxLength300, ...validateInfo.infoRequired],
      },
      required: required,
    },
    namePtInputProps: {
      label: '名稱(外文)',
      name: 'namePt',
      formProps: required && {
        rules: [...validateInfo.infoRequired, ...validateInfo.maxLength300],
      },
    },
  }
}

export default useFormProps
