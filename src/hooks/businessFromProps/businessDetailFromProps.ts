import { validateInfo } from '@/utils/form'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'

function useFormProps(required: boolean) {
  const {
    appealTypeList,
    aidTypeList,
    conclusionTypeOption,
    flagList,
    businessResultType,
    agentList,
    disapprovalReasonOption,
    users,
    StageType,
    necessaryRule,
  } = useSelector((store: any) => store.app)

  const agentOption = () => {
    const option: any = []
    agentList?.forEach((item: any) => {
      if (item.status === 'A') {
        option.push({
          id: item.id,
          nameTc: item?.nameTc,
        })
      }
    })
    return option
  }

  return {
    // 業務資料
    applicantInputProps: {
      label: '申請人',
      name: 'applicantName',
      inputProps: {
        disabled: true,
      },
    },
    caseCodeInputProps: {
      label: '申請編號',
      name: 'applicationCode',
      inputProps: {
        disabled: true,
      },
    },
    businessNameInputProps: {
      label: '業務種類',
      name: 'businessName',
      inputProps: {
        disabled: true,
      },
    },
    businessCodeInputProps: {
      label: '業務編號',
      name: 'businessCode',
      inputProps: {
        disabled: true,
      },
    },
    AidTypeSelectProps: {
      label: '申請援助範圍',
      name: 'aidTypeStartList',
      list: {
        list: aidTypeList,
        value: 'id',
        label: 'nameTc',
      },
      selectProps: {
        mode: 'tags',
        disabled: true,
      },
    },
    submitDateInputProps: {
      label: '遞交時間',
      name: 'submitDate',
      pickerProps: {
        minDate: dayjs(),
      },
    },
    reasonInputProps: {
      label: '申請原因',
      name: 'businessReason',
    },
    descriptionInputProps: {
      label: '備註',
      name: 'description',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    StageTypeSelectProps: {
      label: '階段類型',
      name: 'flowStageType',
      list: {
        list: StageType,
        value: 'id',
        label: 'nameTc',
      },
    },

    // 審議結論
    conclusionTypeRadioProps: {
      label: '審議結論類型',
      name: 'conclusionType',
      list: {
        list: conclusionTypeOption,
        value: 'id',
        label: 'nameTc',
      },
      radioProps: {
        disabled: true,
      },
      required: required,
    },
    businessResultSelectProps: {
      label: '事項結果',
      name: 'businessConclusionResultId',
      list: {
        list: businessResultType,
        value: 'id',
        label: 'localizedName',
      },
      selectProps: {
        showSearch: true,
        optionFilterProp: 'localizedName',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    changeAidRadioProps: {
      label: '是否變更援助範圍',
      name: 'changeAid',
      list: {
        list: flagList,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    agentSelectProps: {
      label: '批給代理人',
      name: 'agentId',
      list: {
        list: agentOption(),
        value: 'id',
        label: 'nameTc',
      },
      selectProps: {
        showSearch: true,
        optionFilterProp: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    disapprovalReasonSelectProps: {
      label: '不批給理由',
      name: 'disapprovalReasonIdList',
      list: {
        list: disapprovalReasonOption,
        value: 'id',
        label: 'nameTc',
      },
      selectProps: {
        showSearch: true,
        optionFilterProp: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    disapprovalDescEndInputProps: {
      label: '不批給說明',
      name: 'disapprovalDescEnd',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    aidTypeSelectProps: {
      label: '變更後援助範圍',
      name: 'aidTypeEndList',
      selectProps: {
        mode: 'tags',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    userSelectProps: {
      label: '新持檔人',
      name: 'userId',
      list: {
        list: users,
        value: 'id',
        label: 'username',
      },
      selectProps: {
        showSearch: true,
        optionFilterProp: 'username',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    rejectReasonInputProps: {
      label: '不接受原因',
      name: 'rejectReason',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    descriptionsInputProps: {
      label: '審議原因',
      name: 'description',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },

    // 司法申訴編輯表單
    appealCodeInputProps: {
      label: '申訴編號',
      name: 'appealCode',
      inputProps: {
        disabled: true,
      },
    },
    appellantInputProps: {
      label: '申請人',
      name: 'appellantName',
      inputProps: {
        disabled: true,
      },
    },
    appealTypeSelectProps: {
      label: '申訴類型',
      name: 'appealType',
      list: {
        list: appealTypeList,
        value: 'id',
        label: 'nameTc',
      },
      selectProps: {
        disabled: true,
      },
    },
    appealDateInputProps: {
      label: '申訴日期',
      name: 'appealDate',
      inputProps: {
        disabled: true,
      },
    },
    personageInputProps: {
      label: '案件關係人',
      name: 'appellantName',
      inputProps: {
        disabled: true,
      },
    },
    SwitchRadioProps: {
      name: 'switchValue',
      list: {
        list: flagList,
        value: 'id',
        label: 'nameTc',
      },
    },
    personageSelectProps: {
      label: '案件關係人',
      name: 'applicationId',
      list: {
        list: users,
        value: 'id',
        label: 'username',
      },
      selectProps: {
        showSearch: true,
        optionFilterProp: 'username',
      },
    },

    // 文件-遞交物
    namePtInputProps: {
      label: '名稱（外文）',
      name: 'namePt',
    },
    nameTcInputProps: {
      label: '名稱（中文）',
      name: 'nameTc',
    },
    necessaryRuleInputProps: {
      label: '是否必填',
      name: 'necessaryRule',
    },
    necessaryRuleRadioProps: {
      label: '是否必填',
      name: 'necessaryRule',
      list: {
        list: necessaryRule,
        value: 'id',
        label: 'nameTc',
      },
      radioProps: {
        disabled: true,
      },
    },

    // 文件-結果物
    ResultSelectProps: {
      label: '業務結果',
      name: 'businessResultId',
    },
    objectTypeSelectProps: {
      label: '業務對象類型',
      name: 'objectTypeId',
    },
    objectsSelectProps: {
      label: '業務對象明細',
      name: 'objectsId',
    },
    resultFileSelectProps: {
      label: '結果物',
      name: 'result',
      required: required,
    },
    completeRadioProps: {
      label: '是否已完成',
      name: 'complete',
      list: {
        list: flagList,
        value: 'id',
        label: 'nameTc',
      },
    },
    dealDateStartPickerProps: {
      label: '開始處理時間',
      name: 'dealDateStart',
      pickerProps: {
        minDate: dayjs(),
      },
      // required: required,
    },
    completeDatePickerProps: {
      label: '完成時間',
      name: 'completeDate',
      pickerProps: {
        minDate: dayjs(),
      },
    },
  }
}

export default useFormProps
