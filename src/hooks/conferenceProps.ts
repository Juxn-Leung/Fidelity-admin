import { validateInfo } from '@/utils/form'
import { useSelector } from 'react-redux'

function useFormProps(required: boolean) {
  const {
    meetingConfigurationList,
    meetingMinutesTextDraftTemplateList,
    sourceTypeList,
    userList,
    objectTypeList,
    consultationTypeList,
    weekList,
    phoneTypeList,
    methodHolidayList,
    flagList,
  } = useSelector((store: any) => store.app)

  return {
    meetingConfigurationIdSelectProps: {
      label: '所屬配置會議',
      name: 'meetingConfigurationId',
      list: {
        list: meetingConfigurationList,
        value: 'id',
        label: 'nameConfigure',
      },
    },
    meetingMinutesTextDraftTemplateIdSelectProps: {
      label: '會議記錄說明模板',
      name: 'configureMeetingMinutesTextDraftTemplateId',
      list: {
        list: meetingMinutesTextDraftTemplateList,
        value: 'id',
        label: 'nameConfigure',
      },
    },
    dateInputProps: {
      label: '日期',
      name: 'date',
    },
    consultationDateInputProps: {
      label: '諮詢日期',
      name: 'consultationDate',
    },
    sourceTypeSelectProps: {
      label: '來源',
      name: 'sourceType',
      list: {
        list: sourceTypeList,
        value: 'id',
        label: 'nameTc',
      },
    },
    sourceOtherInfoInputProps: {
      label: '其他來源',
      name: 'sourceOtherInfo',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    codeQueueInputProps: {
      label: '籌號',
      name: 'codeQueue',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    appointmentNeedSelectProps: {
      label: '是否預約',
      name: 'appointmentNeed',
      list: {
        list: flagList,
        value: 'id',
        label: 'nameTc',
      },
    },
    phoneTypeSelectProps: {
      label: '撥號方式',
      name: 'phoneType',
      list: {
        list: phoneTypeList,
        value: 'id',
        label: 'nameTc',
      },
    },

    consultationAccompanierIdSelectProps: {
      label: '陪同人員',
      name: 'consultationAccompanierId',
      list: {
        list: [],
        value: 'id',
        label: 'nameTc',
      },
    },
    consultationTypeIdSelectProps: {
      label: '諮詢類型',
      name: 'consultationTypeId',
      list: {
        list: consultationTypeList,
        value: 'id',
        label: 'nameTc',
      },
    },
    contentConsultationInputProps: {
      label: '諮詢內容',
      name: 'contentConsultation',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    descriptionInputProps: {
      label: '備註',
      name: 'description',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },

    objectTypeIdSelectProps: {
      label: '諮詢對象類型',
      name: 'objectTypeId',
      list: {
        list: objectTypeList,
        value: 'id',
        label: 'nameTc',
      },
    },
    objectsIdSelectProps: {
      label: '諮詢對象明細',
      name: 'objectsId',
      list: {
        list: [],
        value: 'id',
        label: 'nameTc',
      },
    },

    userIdsSelectorProps: {
      label: '參會人員',
      name: 'userIds',
      list: {
        list: userList,
        value: 'id',
        label: 'displayName',
      },
      selectProps: {
        mode: 'multiple',
      },
      required: required,
    },

    nameConfigureInputProps: {
      label: '配置名稱',
      name: 'nameConfigure',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    titleInputProps: {
      label: '會議默認標題',
      name: 'title',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    addressInputProps: {
      label: '會議默認地點',
      name: 'address',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    timeStartInputProps: {
      label: '默認開始時間',
      name: 'timeStart',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    timeEndInputProps: {
      label: '默認結束時間',
      name: 'timeEnd',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    weekInputProps: {
      label: '週幾',
      name: 'week',
      list: {
        list: weekList,
        value: 'id',
        label: 'nameTc',
      },
      required: required,
    },
    meetingAmountInputProps: {
      label: '週期期數',
      name: 'meetingAmount',
      formProps: required && {
        rules: [...validateInfo.infoRequired, ...validateInfo.numberRequired],
      },
      required: required,
    },
    autoedSelectorProps: {
      label: '是否自動創建',
      name: 'autoed',
      list: {
        list: flagList,
        value: 'id',
        label: 'nameTc',
      },
    },
    codeOrderSelectorProps: {
      label: '是否使用按序的編號',
      name: 'codeOrder',
      list: {
        list: flagList,
        value: 'id',
        label: 'nameTc',
      },
      required: required,
    },
    timeAutoInputProps: {
      label: '首次自動創建時間',
      name: 'timeAuto',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    repeatDaysInputProps: {
      label: '重複執行間隔天數',
      name: 'repeatDays',
      formProps: required && {
        rules: [...validateInfo.infoRequired, ...validateInfo.numberRequired],
      },
      required: required,
    },
    methodHolidaySelectorProps: {
      label: '遇到假期處理方式',
      name: 'methodHoliday',
      list: {
        list: methodHolidayList,
        value: 'id',
        label: 'nameTc',
      },
    },
    templateMeetingMinutesInputProps: {
      label: '會議記錄模板',
      name: 'templateMeetingMinutes',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    descMeetingMinutesInputProps: {
      label: '會議記錄說明',
      name: 'descMeetingMinutes',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    meetingMinutesDescriptionInputProps: {
      label: '會議記錄說明',
      name: 'meetingMinutesDescription',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    otherResultsInputProps: {
      label: '結果',
      name: 'otherResults',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
  }
}

export default useFormProps
