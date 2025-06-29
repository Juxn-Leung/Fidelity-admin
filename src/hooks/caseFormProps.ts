import { validateInfo } from '@/utils/form'
import { useSelector } from 'react-redux'

function useFormProps(required: boolean) {
  const {
    currencyList,
    caseList,
    flagList,
    internalStatusList,
    onlinesStatusList,
    externalStatusList,
    addingTypeList,
    applicationTypeList,
    litigationType,
    litigationTypeDetail,
    lawsuitStageList,
    proxyCompulsoryList,
    applicationCaseResultList,
    approvedObjectList,
    socialFundSituationList,
    agentLegalDependentList,
    otherKnowDomesticViolenceList,
    womenRightsTypeList,
    disabilityTypeList,
    caseTypeList,
    caseOutcomeList,
    courtObjectsList,
    arbitrationStageList,
    arbitrationTypeList,
    arbitrationTypeDetailList,
    arbitrationObjectsList,
    // arbitrationStatusIdentityList,
    caseProxyTypeList,
    storageList,
    abolishReasonList,
    abolishContentList,
    businessTypes,
    applicationCaseList,
  } = useSelector((store: any) => store.app)

  const applicationCaseOption = () => {
    return applicationCaseList.filter((item: any) => {
      return item.code
    })
  }

  return {
    proxyStakeholderIdSelectorProps: {
      label: '所屬關係人',
      name: 'proxyStakeholderId',
      list: {
        list: [],
        value: 'id',
        label: 'localizedName',
      },
    },
    agentIdSelectorProps: {
      label: '代理人',
      name: 'agentId',
      list: {
        list: [],
        value: 'id',
        label: 'localizedName',
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
      required: required,
    },
    caseTypeSelectProps: {
      label: '案件類型',
      name: 'caseType',
      list: {
        list: caseTypeList,
        value: 'id',
        label: 'nameTc',
      },
      required: required,
    },
    applicationCaseIdSelectorProps: {
      label: '申請編號',
      name: 'applicationCaseId',
      list: {
        list: [],
        value: 'id',
        label: 'code',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    applicationIdSelectorProps: {
      label: '申請編號',
      name: 'applicationCaseId',
      list: {
        list: applicationCaseOption(),
        value: 'id',
        label: 'code',
        // label: 'legalCaseApplyCode',
      },
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
      label: '備註',
      name: 'content',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
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
    litigationTypeIdSelectorProps: {
      label: '訴訟類型',
      name: 'litigationTypeId',
      list: {
        list: litigationType,
        value: 'id',
        label: 'localizedName',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      // required: required,
    },
    litigationTypeDetailIdSelectorProps: {
      label: '訴訟細分類型',
      name: 'litigationTypeDetailId',
      list: {
        list: litigationTypeDetail,
        value: 'id',
        label: 'localizedName',
      },
    },
    courtObjectsIdSelectorProps: {
      label: '司法機關',
      name: 'courtObjectsId',
      list: {
        list: courtObjectsList,
        value: 'id',
        label: 'localizedName',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    lawsuitStageSelectorProps: {
      label: '訴訟所處階段',
      name: 'lawsuitStage',
      list: {
        list: lawsuitStageList,
        value: 'id',
        label: 'nameTc',
      },
      // required: required,
    },
    litigationIdentityIdSelectorProps: {
      label: '訴訟的身份',
      name: 'litigationIdentityId',
      list: {
        list: [],
        value: 'id',
        label: 'localizedName',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    arbitrationIdentityIdSelectorProps: {
      label: '訴訟身份',
      name: 'arbitrationIdentityId',
      list: {
        list: [],
        value: 'id',
        label: 'localizedName',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    codeInputProps: {
      label: '申請編號',
      name: 'code',
      formProps: required && {
        rules: [...validateInfo.infoRequired],
      },
    },
    internalStatusSelectorProps: {
      label: '個案狀態',
      name: 'internalStatus',
      list: {
        list: internalStatusList,
        value: 'id',
        label: 'nameTc',
      },
    },
    onlinesStatusSelectorProps: {
      label: '提交狀態',
      name: 'submitStatus',
      list: {
        list: onlinesStatusList,
        value: 'id',
        label: 'nameTc',
      },
    },
    externalStatusIdSelectorProps: {
      label: '申請狀況',
      name: 'externalStatusId',
      list: {
        list: externalStatusList,
        value: 'id',
        label: 'nameTc',
      },
      required: required,
    },

    guardianNeedSelectorProps: {
      label: '是否需要監護人或保佐人',
      name: 'guardianNeed',
      list: {
        list: flagList,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    familyInputProps: {
      label: '家團成員',
      name: 'family',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    applyDateInputProps: {
      label: '申請日期',
      name: 'applyDate',
    },
    personArchiveNameInputProps: {
      label: '申請人',
      name: 'personArchiveName',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    recordGuardianIdInputProps: {
      label: '是否需要監護人或保佐人',
      name: 'recordGuardianId',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    handlerInputProps: {
      label: '持檔人',
      name: 'handler',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    fileConditionInputProps: {
      label: '存倉情況',
      name: 'fileCondition',
    },
    hasLitigationCaseSelectorProps: {
      label: '是否提出司法申訴 ',
      name: 'hasLitigationCase',
      list: {
        list: flagList,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },

    filingDateInputProps: {
      label: '入案日期',
      name: 'filingDate',
    },
    approvalApplyDateInputProps: {
      label: '審批到期日',
      name: 'approvalApplyDate',
    },
    resultApplyDateInputProps: {
      label: '決議日期',
      name: 'resultApplyDate',
    },
    finishApplyDateInputProps: {
      label: '案件完成日期',
      name: 'finishApplyDate',
    },
    proxyCompulsorySelectorProps: {
      label: '訴訟代理人強制情況',
      name: 'proxyCompulsory',
      list: {
        list: proxyCompulsoryList,
        value: 'id',
        label: 'nameTc',
      },
    },
    reasonApprovalNonMandatoryInputProps: {
      label: '訴訟代理人（非強制）仍批給原因',
      name: 'reasonApprovalNonMandatory',
    },
    applicationCaseResultIdSelectorProps: {
      label: '申請個案的案件結果',
      name: 'applicationCaseResultId',
      list: {
        list: applicationCaseResultList,
        value: 'id',
        label: 'localizedName',
      },
    },
    approvedObjectIdSelectorProps: {
      label: '批給對象',
      name: 'approvedObjectId',
      list: {
        list: approvedObjectList,
        value: 'id',
        label: 'localizedName',
      },
    },
    socialFundSituationIdSelectorProps: {
      label: '社會保障基金情況',
      name: 'socialFundSituationId',
      list: {
        list: socialFundSituationList,
        value: 'id',
        label: 'localizedName',
      },
    },
    lackFundNeedSelectorProps: {
      label: '是否經濟能力不足',
      name: 'lackFundNeed',
      list: {
        list: flagList,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    disposablePropertyInputProps: {
      label: '可支配財產金額',
      name: 'disposableProperty',
    },
    disapprovalNeedSelectorProps: {
      label: '是否不獲批給',
      name: 'disapprovalNeed',
      list: {
        list: flagList,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    litigationNeedSelectorProps: {
      label: '是否必要仲裁後訴訟',
      name: 'litigationNeed',
      list: {
        list: flagList,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    agentLegalDependentIdSelectorProps: {
      label: '委任代理人的法律依據',
      name: 'agentLegalDependentId',
      list: {
        list: agentLegalDependentList,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },

    disapprovalDescInputProps: {
      label: '不獲批給的說明',
      name: 'disapprovalDesc',
    },

    abolishReasonIdSelectorProps: {
      label: '廢止原因',
      name: 'abolishReasonId',
      list: {
        list: abolishReasonList,
        value: 'id',
        label: 'localizedName',
      },
    },
    abolishContentIdSelectorProps: {
      label: '廢止內容',
      name: 'abolishContentId',
      list: {
        list: abolishContentList,
        value: 'id',
        label: 'localizedName',
      },
    },
    applicationProgressInputProps: {
      label: '個案跟進進度',
      name: 'applicationProgress',
    },

    addingTypeSelectorProps: {
      label: '創建類型',
      name: 'addingType',
      list: {
        list: addingTypeList,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    applicationParentIdInputProps: {
      label: '從屬的申請個案編號',
      name: 'applicationParentId',
    },
    onlinestatusSelectorProps: {
      label: '在線提交狀態',
      name: 'submitStatus',
      list: {
        list: onlinesStatusList,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
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
    },
    registerCodeInputProps: {
      label: '登記編號',
      name: 'registerCode',
    },
    corporateNameInputProps: {
      label: '法人名稱（中文）',
      name: 'corporateName',
    },
    corporateNamePtInputProps: {
      label: '法人名稱（外文）',
      name: 'corporateNamePt',
    },
    arbitrationStageSelectorProps: {
      label: '必要仲裁所處階段',
      name: 'arbitrationStage',
      list: {
        list: arbitrationStageList,
        value: 'id',
        label: 'nameTc',
      },
      required: required,
    },
    arbitrationTypeSelectorProps: {
      label: '必要仲裁類型',
      name: 'arbitrationTypeId',
      list: {
        list: arbitrationTypeList,
        value: 'id',
        label: 'nameTc',
      },
    },
    arbitrationTypeDetailSelectorProps: {
      label: '必要仲裁細分類型',
      name: 'arbitrationTypeDetailId',
      list: {
        list: arbitrationTypeDetailList,
        value: 'id',
        label: 'nameTc',
      },
    },
    arbitrationStatusIdSelectorProps: {
      label: '必要仲裁的身份',
      name: 'arbitrationStatusId',
      list: {
        list: [],
        value: 'id',
        label: 'localizedName',
      },
    },
    arbitrationObjectsIdSelectorProps: {
      label: '仲裁機構',
      name: 'arbitrationObjectsId',
      list: {
        list: arbitrationObjectsList,
        value: 'id',
        label: 'localizedName',
      },
    },
    requestDescInputProps: {
      label: '請求的簡要陳述',
      name: 'requestDesc',
    },
    requestContentInputProps: {
      label: '訴訟請求',
      name: 'requestContent',
    },

    domesticViolenceNeedSelectorProps: {
      label: '是否涉及家暴',
      name: 'domesticViolenceNeed',
      list: {
        list: flagList,
        value: 'id',
        label: 'nameTc',
      },
    },
    emergencyLegalAidNeedSelectorProps: {
      label: '獲得緊急法援',
      name: 'emergencyLegalAidNeed',
      list: {
        list: flagList,
        value: 'id',
        label: 'nameTc',
      },
    },
    reasonEmergencyLegalAidInputProps: {
      label: '獲得緊急法援原因',
      name: 'reasonEmergencyLegalAid',
    },
    otherKnowDomesticViolenceIdSelectorProps: {
      label: '其他已知悉家暴的部門',
      name: 'otherKnowDomesticViolenceId',
      list: {
        list: otherKnowDomesticViolenceList,
        value: 'id',
        label: 'localizedName',
      },
      // selectProps: {
      //   mode: 'multiple'
      // }
    },
    investigationNeedSelectorProps: {
      label: '是否特快審議無需調查程序',
      name: 'investigationNeed',
      list: {
        list: flagList,
        value: 'id',
        label: 'nameTc',
      },
    },
    womenRightsNeedSelectorProps: {
      label: '是否涉及婦女權益受損',
      name: 'womenRightsNeed',
      list: {
        list: flagList,
        value: 'id',
        label: 'nameTc',
      },
    },
    womenRightsTypeIdSelectorProps: {
      label: '婦女權益受損種類',
      name: 'womenRightsTypeId',
      list: {
        list: womenRightsTypeList,
        value: 'id',
        label: 'nameTc',
      },
    },
    disabilityTypeIdSelectorProps: {
      label: '殘疾類別',
      name: 'disabilityTypeId',
      list: {
        list: disabilityTypeList,
        value: 'id',
        label: 'nameTc',
      },
    },
    fromSocialWorkerNeedSelectorProps: {
      label: '是否經社工介紹',
      name: 'fromSocialWorkerNeed',
      list: {
        list: flagList,
        value: 'id',
        label: 'nameTc',
      },
    },
    supplementDescInputProps: {
      label: '補充說明',
      name: 'supplementDesc',
    },
    caseCodeSelectorProps: {
      label: '案件編號',
      name: 'caseInfoId',
      list: {
        list: caseTypeList,
        value: 'id',
        label: 'code',
      },
      required: required,
    },
    caseOutcomeSelectorProps: {
      label: '案件結果',
      name: 'caseOutcomeId',
      list: {
        list: caseOutcomeList,
        value: 'id',
        label: 'localizedName',
      },
    },
    recordStakeholderInputProps: {
      label: '案件關係人',
      name: 'recordStakeholder',
    },
    resolutionCodeInputProps: {
      label: '決議編號',
      name: 'resolutionCode',
    },
    codeResolutionDateInputProps: {
      label: '決議時間',
      name: 'codeResolutionDate',
    },
    caseProxyTypeSelectorProps: {
      label: '代理人類型',
      name: 'caseProxyType',
      list: {
        list: caseProxyTypeList,
        value: 'id',
        label: 'nameTc',
      },
    },
    caseStorageSelectorProps: {
      label: '案件存放位置',
      name: 'storageId',
      list: {
        list: storageList,
        value: 'id',
        label: 'localizedName',
      },
      required: required,
    },
    parentApplicationFileCategoryIdSelectorProps: {
      label: '從屬分類',
      name: 'parentApplicationFileCategoryId',
      list: {
        list: [],
        value: 'id',
        label: 'nameTc',
      },
    },
    configureApplicationFileCategoryIdSelectorProps: {
      label: '文件分類模板',
      name: 'configureApplicationFileCategoryId',
      list: {
        list: [],
        value: 'id',
        label: 'nameTc',
      },
      required: required,
    },
    nameInputProps: {
      label: '名稱',
      name: 'nameTc',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },

    businessTypeSelectProps: {
      label: '業務種類',
      name: 'businessTypeId',
      list: {
        list: businessTypes,
        value: 'id',
        label: 'nameTc',
      },
      required: required,
    },

    businessReasonInputProps: {
      label: '申請原因',
      name: 'businessReason',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    nameCorporateInputProps: {
      label: '法人名稱（中文）',
      name: 'nameCorporate',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    nameCorporatePtInputProps: {
      label: '法人名稱（外文）',
      name: 'nameCorporatePt',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    // registerCodeInputProps: {
    //   label: '登記編號',
    //   name: 'registerCode',
    //   formProps: required && {
    //     rules: validateInfo.infoRequired,
    //   },
    //   required: required,
    // },
  }
}

export default useFormProps
