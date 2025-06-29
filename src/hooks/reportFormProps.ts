import { validateInfo } from '@/utils/form'
import { useSelector } from 'react-redux'

function useFormProps(required: boolean) {
  const {
    currencyList,
    caseList,
    flagList,
    agentNoChargeNoticeTypeList,
    expenditureStatus,
  } = useSelector((store: any) => store.app)

  return {
    agentIdSelectorProps: {
      label: '代理人',
      name: 'agentId',
      list: {
        list: [],
        value: 'id',
        label: 'localizedName',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    descriptionInputProps: {
      label: '備註',
      name: 'description',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },

    caseInfoIdSelectorProps: {
      label: '案件編號',
      name: 'caseInfoId',
      list: {
        list: caseList,
        value: 'id',
        label: 'code',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      // required: required
    },
    typeSelectorProps: {
      label: '開支類型',
      name: 'type',
      list: {
        list: expenditureStatus,
        value: 'id',
        label: 'nameTc',
      },
    },
    currencyIdSelectorProps: {
      label: '幣種',
      name: 'currencyId',
      list: {
        list: currencyList,
        value: 'id',
        label: 'localizedName',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    submitFeeInputProps: {
      label: '金額（提交）',
      name: 'submitFee',
      formProps: required && {
        rules: [...validateInfo.infoRequired, ...validateInfo.numberRequired],
      },
    },
    contentInputProps: {
      label: '內容',
      name: 'content',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    agentNoChargeNoticeTypeIdSelectorProps: {
      label: '代理人不收服務費的通知方式',
      name: 'agentNoChargeNoticeTypeId',
      list: {
        list: agentNoChargeNoticeTypeList,
        value: 'id',
        label: 'localizedName',
      },
      required: required,
    },
    noticeDateInputProps: {
      label: '通知日期',
      name: 'noticeDate',
    },
    noticeContentInputProps: {
      label: '通知內容',
      name: 'noticeContent',
    },

    caseBasedSelectorProps: {
      label: '是否基於案件',
      name: 'caseBased',
      list: {
        list: flagList,
        value: 'id',
        label: 'nameTc',
      },
      required: required,
    },
    hourlySalaryInputProps: {
      label: '時薪',
      name: 'hourlySalary',
      formProps: required && {
        rules: [...validateInfo.infoRequired, ...validateInfo.numberRequired],
      },
    },
    dateInputProps: {
      label: '',
      name: '',
    },

    applicationSelectorProps: {
      label: '關聯個案',
      name: 'application',
      list: {
        list: [],
        value: 'id',
        label: 'code',
      },
      selectProps: {
        mode: 'multiple',
      },
    },
    caseSelectorProps: {
      label: '關聯案件',
      name: 'case',
      list: {
        list: [],
        value: 'id',
        label: 'code',
      },
      selectProps: {
        mode: 'multiple',
      },
    },
  }
}

export default useFormProps
