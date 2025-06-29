import { validateInfo } from '@/utils/form'
import { useSelector } from 'react-redux'

function useFormProps(required: boolean) {
  const {
    applicantTypeList,
    careerList,
    marryList,
    educationList,
    applicationTypeList,
    flagList,
    recordAidRangeList,
    parentLanguageList,
    kinshipList,
    nationalityList,
    stakeholderTypeList,
    aidTypeList,
    reportObjectList,
    corporateTypeList,
  } = useSelector((store: any) => store.app)

  return {
    isUseArchiveSelectorProps: {
      label: '是否使用個人檔案',
      name: 'isUseArchive',
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
    applicantTypeSelectorProps: {
      label: '申請人類型',
      name: 'applicantType',
      list: {
        list: applicantTypeList,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      // required: required,
    },
    phoneInputProps: {
      label: '聯繫電話',
      name: 'phone',
      formProps: required && {
        rules: [...validateInfo.infoRequired, ...validateInfo.numberRequired],
      },
    },
    faxInputProps: {
      label: '傳真',
      name: 'fax',
      formProps: required && {
        rules: [...validateInfo.infoRequired, ...validateInfo.numberRequired],
      },
    },
    emailInputProps: {
      label: '電郵',
      name: 'email',
      formProps: required && {
        rules: [...validateInfo.infoRequired, ...validateInfo.emailRequired],
      },
    },
    careerIdSelectorProps: {
      label: '職業',
      name: 'careerId',
      list: {
        list: careerList,
        value: 'id',
        label: 'localizedName',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    ageInputProps: {
      label: '年齡',
      name: 'ageApply',
      inputProps: {
        disabled: true,
      },
    },
    nationalityIdSelectorProps: {
      label: '國籍',
      name: 'nationalityId',
      list: {
        list: nationalityList,
        value: 'id',
        label: 'localizedName',
      },
    },
    marryIdSelectorProps: {
      label: '婚姻狀況',
      name: 'marryId',
      list: {
        list: marryList,
        value: 'id',
        label: 'localizedName',
      },
      required: required,
    },
    educationIdSelectorProps: {
      label: '教育程度',
      name: 'educationId',
      list: {
        list: educationList,
        value: 'id',
        label: 'localizedName',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    addressMailInputProps: {
      label: '通訊地址',
      name: 'addressMail',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    addressLiveInputProps: {
      label: '住址',
      name: 'addressLive',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    nameUrgentInputProps: {
      label: '緊急聯繫人姓名',
      name: 'nameUrgent',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    phoneUrgentInputProps: {
      label: '緊急聯繫人電話',
      name: 'phoneUrgent',
      formProps: required && {
        rules: [...validateInfo.infoRequired, ...validateInfo.numberRequired],
      },
    },
    applicationTypeSelectorProps: {
      label: '申請類型',
      name: 'applicationType',
      list: {
        list: applicationTypeList,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      // required: required,
    },
    requestContentInputProps: {
      label: '訴訟請求',
      name: 'requestContent',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    requestDescInputProps: {
      label: '訴訟請求的簡要陳述',
      name: 'requestDesc',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },

    legalCaseApplyCodeInputProps: {
      label: '案件編號',
      name: 'legalCaseApplyCode',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      // required: required,
    },
    isLitigationSelectorProps: {
      label: '是否必要仲裁後訴訟',
      name: 'litigationNeed',
      list: {
        list: flagList,
        value: 'id',
        label: 'nameTc',
      },
      required: required,
    },
    isOpponentFamilySelectorProps: {
      label: '家團成員是否存在案件的他方當事人',
      name: 'opponentFamilyNeed',
      list: {
        list: flagList,
        value: 'id',
        label: 'nameTc',
      },
      // required: required,
    },
    recordAidRangeSelectorProps: {
      label: '批給援助範圍',
      name: 'recordAidRangeIds',
      list: {
        list: recordAidRangeList,
        value: 'id',
        label: 'nameTc',
      },
      selectProps: {
        mode: 'multiple',
      },
      required: required,
    },
    submissionsSelectorProps: {
      label: '可作用溝通之語言',
      name: 'submissionsIds',
      list: {
        list: parentLanguageList,
        value: 'id',
        label: 'nameTc',
      },
      selectProps: {
        mode: 'multiple',
      },
    },
    languageSelectorProps: {
      label: '語言',
      name: 'language',
      list: {
        list: parentLanguageList,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      // required: required,
    },
    arbitrationTypeDetailInputProps: {
      label: '仲裁機構',
      name: 'arbitrationTypeDetail',
    },

    kinshipIdSelectorProps: {
      label: '親屬關係',
      name: 'kinshipId',
      list: {
        list: kinshipList,
        value: 'id',
        label: 'localizedName',
      },
      required: required,
    },

    opponentSelectorProps: {
      label: '是否案件的他方當事人',
      name: 'opponentNeed',
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
    usedPropertyTableSelectorProps: {
      label: '是否用於財產表計算',
      name: 'usedPropertyTableNeed',
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
    corporateNameInputProps: {
      label: '名稱（法人）',
      name: 'corporateName',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    registerCodeInputProps: {
      label: '登記編號',
      name: 'registerCode',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    corporateTypeSelectProps: {
      label: '法人類型',
      name: 'corporateType',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      list: {
        list: corporateTypeList,
        value: 'id',
        label: 'nameTc',
      },
    },
    addressInputProps: {
      label: '通訊地址/住址',
      name: 'address',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      // required: required,
    },

    stakeholderTypeSelectorProps: {
      label: '關係人類型',
      name: 'stakeholderType',
      list: {
        list: stakeholderTypeList,
        value: 'id',
        label: 'nameTc',
      },
      required: required,
    },
    stakeholderTypeDetailsSelectorProps: {
      label: '關係人類型明細',
      name: 'typeDetails',
      list: {
        list: applicantTypeList,
        value: 'id',
        label: 'nameTc',
      },
      required: required,
    },
    aidTypeSelectorProps: {
      label: '申請援助範圍',
      name: 'aidTypeList',
      list: {
        list: aidTypeList,
        value: 'id',
        label: 'nameTc',
      },
    },

    contentTcInputProps: {
      label: '內容（繁）',
      name: 'contentTc',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    contentScInputProps: {
      label: '內容（簡）',
      name: 'contentSc',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    contentEnInputProps: {
      label: '內容（英）',
      name: 'contentEn',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    contentPtInputProps: {
      label: '內容（葡）',
      name: 'contentPt',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    indexInputProps: {
      label: '序號',
      name: 'index',
    },
    filenameInputProps: {
      label: '文件名稱',
      name: 'filename',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    submitTemplateSelectorProps: {
      label: '申請憑證草稿模板',
      name: 'configureApplicationVoucherTemplateId',
      list: {
        list: [],
        value: 'id',
        label: 'nameTc',
      },
      required: required,
    },
    applicationTemplateSelectorProps: {
      label: '申請遞交物類型',
      name: 'configureApplicationSubmitObjectId',
      list: {
        list: [],
        value: 'id',
        label: 'nameTc',
      },
    },
    draftNeedSelectorProps: {
      label: '是否需要草稿',
      name: 'draftNeed',
      list: {
        list: flagList,
        value: 'id',
        label: 'nameTc',
      },
      required: required,
    },
    makeUpTemplateSelectorProps: {
      label: '補交資料聲明書模板',
      name: 'configureApplicationSupplementTemplateId',
      list: {
        list: [],
        value: 'id',
        label: 'nameTc',
      },
    },
    supplementDateInputProps: {
      label: '補交期限',
      name: 'supplementDate',
    },
    reminderNeedSelectorProps: {
      label: '是否需要提醒',
      name: 'reminderNeed',
      list: {
        list: flagList,
        value: 'id',
        label: 'nameTc',
      },
      required: required,
    },
    makeUpContentInputProps: {
      label: '補交內容',
      name: 'content',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },

    reportObjectSelectorProps: {
      label: '報告物類型',
      name: 'reportObject',
      list: {
        list: reportObjectList,
        value: 'id',
        label: 'nameTc',
      },
    },
    fileNameInputProps: {
      label: '文件名稱',
      name: 'fileName',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    descCommitteeNotIncludedInputProps: {
      label: '待委員會決定內容描述（不包括）',
      name: 'descCommitteeNotIncluded',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    descCommitteeIncludedInputProps: {
      label: '待委員會決定內容描述（包括）',
      name: 'descCommitteeIncluded',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
  }
}

export default useFormProps
