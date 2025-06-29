import { validateInfo } from '@/utils/form'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'

function useFormProps(required: boolean) {
  const {
    sexList,
    identityList,
    contactTypeList,
    statusList,
    relationTypeList,
    fileSource,
    parentLanguageList,
    flagList,
    appointmentStatusList,
    barAssociationNoticeList,
    lawFirmList,
    reexamination,
    caseType,
    litigationStageType,
    agentWorkStatusList,
    businessTypes,
    appellantTypeList,
    appealTypeOption,
    sourceOption,
    domesticViolenceType,
    users,
    applicationCaseList,
    labelType,
    caseTypeList,
    FileList,
  } = useSelector((store: any) => store.app)

  return {
    codeInputProps: {
      label: '證件編號',
      name: 'identityCode',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      // required: required,
    },
    identityTypeIdSelectorProps: {
      label: '身份證明文件類型',
      name: 'identityTypeId',
      list: {
        list: identityList,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      // required: required,
    },
    displayNameInputProps: {
      label: '顯示名稱',
      name: 'displayName',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    nameDisplayInputProps: {
      label: '顯示名稱',
      name: 'nameDisplay',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    nameTcInputProps: {
      label: '名稱(中文)',
      name: 'nameTc',
      formProps: required && {
        rules: [...validateInfo.maxLength300, ...validateInfo.infoRequired],
      },
    },
    namePtInputProps: {
      label: '名稱(外文)',
      name: 'namePt',
      formProps: required && {
        rules: [...validateInfo.infoRequired, ...validateInfo.maxLength300],
      },
    },
    birthDateInputProps: {
      label: '出生日期',
      name: 'birthDate',
      pickerProps: {
        maxDate: dayjs(),
      },
    },
    ageInputProps: {
      label: '年齡',
      name: 'age',
    },
    sexSelectorProps: {
      label: '性別',
      name: 'gender',
      list: {
        list: sexList,
        value: 'id',
        label: 'nameTc',
      },
      // required: required,
    },
    descriptionInputProps: {
      label: '描述',
      name: 'description',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },

    relationTypeSelectorProps: {
      label: '關聯情況',
      name: 'relationType',
      list: {
        list: relationTypeList,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    mergeSelectorProps: {
      label: '合併至的個人檔案',
      name: 'personArchiveMergedId',
      list: {
        list: [],
        value: 'value',
        label: 'label',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },

    relevanceSelectorProps: {
      label: '首選個人檔案',
      name: 'relevanceId',
      list: {
        list: [],
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },

    contactTypeSelectorProps: {
      label: '聯繫類型',
      name: 'contactType',
      list: {
        list: contactTypeList,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    contactContentInputProps: {
      label: '聯繫方式',
      name: 'contactContent',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    statusSelectorProps: {
      label: '狀態',
      name: 'status',
      list: {
        list: statusList,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },

    lawyerInternCodeInputProps: {
      label: '實習編號',
      name: 'lawyerInternCode',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    lawyerInternDateProps: {
      label: '實習律師註冊日期',
      name: 'lawyerInternDate',
    },
    lawyerDateProps: {
      label: '律師開始執業日期',
      name: 'lawyerDate',
    },
    lawyerCodeInputProps: {
      label: '執業編號',
      name: 'lawyerCode',
    },

    // 律師公會通知
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
        maxDate: dayjs(),
      },
      required: required,
    },

    fileSourceSearchProps: {
      label: '文件來源',
      name: 'fileSource',
      list: {
        list: fileSource,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    fileListSearchProps: {
      label: '文件列表',
      name: 'fileList',
      list: {
        list: FileList,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      selectProps: {
        showSearch: true,
        optionFilterProp: 'nameTc',
      },
      required: required,
    },
    fileDescriptionInputProps: {
      label: '附件描述',
      name: 'fileDescription',
      formProps: required && {
        rules: validateInfo.infoRequired,
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

    barAssociationNoticeIdSelectorProps: {
      label: '律師公會通知',
      name: 'barAssociationNoticeId',
      list: {
        list: barAssociationNoticeList,
        value: 'id',
        label: 'noticeCode',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    parentLanguageSelectorProps: {
      label: '母語',
      name: 'parentLanguage',
      list: {
        list: parentLanguageList,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    involvedArbitrationSelectorProps: {
      label: '可否參與必要仲裁',
      name: 'involvedArbitration',
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
    appointmentStatusListSelectorProps: {
      label: '代理人的委任狀況',
      name: 'appointmentStatusList',
      list: {
        list: appointmentStatusList,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      selectProps: {
        mode: 'multiple',
      },
      required: required,
    },
    effectStartDateProps: {
      label: '基本資料有效日期（開始）',
      name: 'effectStartDate',
    },
    lawFirmIdSelectorProps: {
      label: '律師樓',
      name: 'lawFirmId',
      list: {
        list: lawFirmList,
        value: 'id',
        label: 'localizedName',
      },
      required: required,
    },
    lawFirmLocationIdSelectorProps: {
      label: '律師樓位置',
      name: 'lawFirmLocationId',
      list: {
        list: [],
        value: 'id',
        label: 'localizedName',
      },
      required: required,
    },
    lawFirmContactIdListSelectorProps: {
      label: '代理人所在律師樓的聯繫方式',
      name: 'lawFirmContactIdList',
      list: {
        list: [],
        value: 'id',
        label: 'localizedName',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      selectProps: {
        showSearch: true,
        optionFilterProp: 'nameTc',
      },
    },
    agentMentorIdSelectorProps: {
      label: '代理人的導師',
      name: 'agentMentorId',
      list: {
        list: [],
        value: 'id',
        label: 'localizedName',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },

    agentWorkStatusTypeIdSelectorProps: {
      label: '代理人的執業狀況類型',
      name: 'agentWorkStatusTypeId',
      list: {
        list: agentWorkStatusList,
        value: 'id',
        label: 'localizedName',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },

    // 案件列表
    caseSortInputProps: {
      label: '案件序號',
      name: 'sort',
      formProps: required && {
        rules: [...validateInfo.numberRequired, ...validateInfo.maxLength10],
      },
      required: required,
    },
    caseCodeInputProps: {
      label: '案件編號',
      name: 'code',
      formProps: required && {
        rules: [...validateInfo.numberRequired],
      },
      required: required,
    },
    reexaminationRadioProps: {
      label: '是否為重審案件',
      name: 'reexamination',
      list: {
        list: reexamination,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    reexaminationCaseInfoIdSelectProps: {
      label: '重審的案件編號',
      name: 'reexaminationCaseInfoId',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },

    caseTypeSelectProps: {
      label: '案件分類',
      name: 'caseType',
      list: {
        list: caseType,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },

    stageTypeSelectProps: {
      label: '案件階段',
      name: 'stageType',
      list: {
        list: litigationStageType,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    parentIdSelectProps: {
      label: '階段所屬的父級案件編號',
      name: 'parentId',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      selectProps: {
        allowClear: true,
        showSearch: true,
        optionFilterProp: 'nameTc',
      },
      // required: required
    },
    secondCaseTypeIdSelectProps: {
      label: '案件類型',
      name: 'secondTypeId',
      list: {
        list: caseTypeList,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    detailTypeIdSelectProps: {
      label: '案件細分類型',
      name: 'detailTypeId',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },

    applicationTypeSelectProps: {
      label: '業務種類',
      name: 'applicationType',
      list: {
        list: businessTypes,
        value: 'id',
        label: 'localizedName',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },

    // 家暴通報記錄
    sourceTypeRadiosProps: {
      label: '來源',
      name: 'sourceType',
      list: {
        list: sourceOption,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    sourceTypeSelectProps: {
      label: '來源',
      name: 'sourceType',
      list: {
        list: sourceOption,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
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
    applicationCaseIdInputProps: {
      label: '關聯個案',
      inputProps: {
        disabled: true,
      },
      // required: required
    },
    notificationDataInputProps: {
      label: '通報日期',
      name: 'noticeDate',
      required: required,
    },
    notificationCodeInputProps: {
      label: '通報表編號',
      name: 'noticeCode',
      formProps: required && {
        rules: [...validateInfo.numberRequired, ...validateInfo.infoRequired],
      },
      required: required,
    },
    domesticReceiveMethodIdSelectProps: {
      label: '接收通報方式',
      name: 'domesticReceiveMethodId',
      list: {
        list: domesticViolenceType,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    userIdSelectProps: {
      label: '負責用戶',
      name: 'userId',
      list: {
        list: users,
        value: 'id',
        label: 'username',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },

    businessTypeSelectProps: {
      label: '業務種類',
      name: 'businessType',
      list: {
        list: businessTypes,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    appellantTypeInputProps: {
      label: '申訴人或受益人',
      name: 'appellantType',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    reasonInputProps: {
      label: '申請原因',
      name: 'reason',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    beneficiaryInputProps: {
      label: '申請人或受益人',
      name: 'beneficiary',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    appellantTypeSelectorProps: {
      label: '申訴人身份',
      name: 'appellantType',
      list: {
        list: appellantTypeList,
        value: 'id',
        label: 'nameTc',
      },
      required: required,
    },

    // 司法申訴
    stakeholderIdSelectorProps: {
      label: '案件關係人',
      name: 'stakeholderId',
      list: {
        list: [],
      },
      required: required,
    },
    appealTypeSelectorProps: {
      label: '申訴類型',
      name: 'appealType',
      list: {
        list: appealTypeOption,
        value: 'id',
        label: 'nameTc',
      },
      required: required,
    },
    appealDateInputProps: {
      label: '申訴日期',
      name: 'appealDate',
      required: required,
    },

    // 標籤管理
    labelContentInputProps: {
      label: '標籤內容',
      name: 'content',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    labelTypeSelectorProps: {
      label: '標籤類型',
      name: 'type',
      list: {
        list: labelType,
        value: 'id',
        label: 'nameTc',
      },
      required: required,
    },
  }
}

export default useFormProps
