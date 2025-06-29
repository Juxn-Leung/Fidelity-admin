import { validateInfo } from '@/utils/form'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'

function useFormProps(required: boolean) {
  const {
    applicationCaseList,
    caseList,
    currencyList,
    courtExpenseTypeOption,
    arbitrationExpenseTypeOption,
    fileSource,
    FileList,
  } = useSelector((store: any) => store.app)
  const caseCodeOption = () => {
    const temporarily: {
      id: ''
      code: ''
    }[] = []
    caseList?.forEach((item: any) => {
      temporarily.push({
        id: item.id,
        code: item.code,
      })
    })
    return temporarily
  }
  const fileOption = () => {
    const temporarily: {
      id: ''
      nameTc: ''
    }[] = []

    FileList?.forEach((item: any) => {
      temporarily.push({
        id: item.id,
        nameTc: item.fileInfo.filename,
      })
    })
    return temporarily
  }
  return {
    // 通知管理
    noticeCodeInputProps: {
      label: '通知編號',
      name: 'noticeCode',
      formProps: required && {
        rules: [...validateInfo.numberRequired, ...validateInfo.infoRequired],
      },
      required: required,
    },
    noticeDateInputProps: {
      label: '通知日期',
      name: 'noticeDate',
      pickerProps: {
        minDate: dayjs(),
      },
      required: required,
    },
    SelectorProps: {
      label: '法院',
      name: 'objectsId',
      required: required,
    },
    descriptionInputProps: {
      label: '描述',
      name: 'description',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },

    caseCodeSelectorProps: {
      label: '案件編號',
      name: 'caseInfoId',
      list: {
        list: caseCodeOption(),
        value: 'id',
        label: 'code',
      },
      required: required,
    },
    caseOutcomeSelectorProps: {
      label: '案件結果',
      name: 'caseOutcomeId',
      list: {
        list: caseList,
        value: 'id',
        label: 'localizedName',
      },
    },
    applicationCaseIdSelectProps: {
      label: '申請編號',
      name: 'applicationCaseId',
      list: {
        list: applicationCaseList,
        value: 'id',
        label: 'code',
      },
      selectProps: {
        showSearch: true,
        optionFilterProp: 'code',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      // required: required
    },
    courtExpenseTypeRadiosProps: {
      label: '類型',
      name: 'courtExpenseType',
      list: {
        list: courtExpenseTypeOption,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    arbitrationExpenseTypeRadiosProps: {
      label: '類型',
      name: 'arbitrationExpenseType',
      list: {
        list: arbitrationExpenseTypeOption,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    actualFeeInputProps: {
      label: '金額',
      name: 'actualFee',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    currencyIdSelectorProps: {
      label: '幣種',
      name: 'currencyId',
      list: {
        list: currencyList,
        value: 'id',
        label: 'nameTc',
      },
      required: required,
    },

    fileSourceSelectorProps: {
      label: '文件來源',
      name: 'fileSource',
      list: {
        list: fileSource,
        value: 'id',
        label: 'nameTc',
      },
      required: required,
    },
    fileIdSelectorProps: {
      label: '文件列表',
      name: 'overallFileId',
      list: {
        list: fileOption(),
        value: 'id',
        label: 'nameTc',
      },
      required: required,
    },
    otherInputProps: {
      label: '其他',
      name: 'other',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
  }
}

export default useFormProps
