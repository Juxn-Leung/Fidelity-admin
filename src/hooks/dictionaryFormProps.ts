import { validateInfo } from '@/utils/form'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'

function useFormProps(required: boolean) {
  const {
    objectTypeList,
    statusList,
    businessTypes,
    weekOption,
    flagList,
    periodOption,
    methodHolidayOption,
    users,
    litigationType,
    typeTagList,
  } = useSelector((store: any) => store.app)

  return {
    codeInputProps: {
      label: '編號',
      name: 'code',
      formProps: {
        rules: [...validateInfo.required, ...validateInfo.infoRequired],
      },
    },
    typeSelectorProps: {
      label: '字典類型',
      name: 'objectTypeId',
      list: {
        list: objectTypeList,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    nameTcInputProps: {
      label: '名稱(中文)',
      name: 'nameTc',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    namePtInputProps: {
      label: '名稱(外文)',
      name: 'namePt',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    typeInputProps: {
      label: '類型',
      name: 'type',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    indexInputProps: {
      label: '序號',
      name: 'index',
      formProps: required && {
        rules: [...validateInfo.infoRequired, ...validateInfo.numberRequired],
      },
    },
    descriptionInputProps: {
      label: '描述',
      name: 'description',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
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
    caseTypeSelectorProps: {
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },

    // 會議記錄文字稿模板
    nameConfigureInputProps: {
      label: '配置名稱',
      name: 'nameConfigure',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    businessTypeCodeSelectorProps: {
      label: '業務種類',
      name: 'businessTypeCode',
      list: {
        list: businessTypes,
        value: 'code',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    textTemplateInputProps: {
      label: '會議記錄模板',
      name: 'templateMeetingMinutes',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },

    // 會議配置
    titleInputProps: {
      label: '默認標題',
      name: 'title',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    addressInputProps: {
      label: '默認地點',
      name: 'address',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    timeStartInputProps: {
      label: '默認開始時間',
      name: 'timeStart',
      pickerProps: {
        defaultOpenValue: dayjs('00:00', 'HH:mm'),
      },
      required: required,
    },
    timeEndInputProps: {
      label: '默認結束時間',
      name: 'timeEnd',
      pickerProps: {
        defaultOpenValue: dayjs('00:00', 'HH:mm'),
      },
      required: required,
    },
    weekSelectorProps: {
      label: '週幾',
      name: 'week',
      list: {
        list: weekOption,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    periodSelectorProps: {
      label: '週期',
      name: 'period',
      list: {
        list: periodOption,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    autoedRadiosProps: {
      label: '是否自動創建',
      name: 'autoed',
      list: {
        list: flagList,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    timeAutoInputProps: {
      label: '首次自動創建日期',
      name: 'timeAuto',
      pickerProps: {
        minDate: dayjs(),
      },
    },
    repeatDaysInputProps: {
      label: '重複執行間隔天數',
      name: 'repeatDays',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    methodHolidaySelectorProps: {
      label: '遇到假期的處理方式',
      name: 'methodHoliday',
      list: {
        list: methodHolidayOption,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },

    userIdsAddSelectorProps: {
      label: '新增參會人員',
      name: 'userIds',
      list: {
        list: users,
        value: 'username',
        label: 'username',
      },
      selectProps: {
        mode: 'multiple',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },

    litigationTypeSelectorProps: {
      label: '訴訟類型',
      name: 'litigationTypeId',
      list: {
        list: litigationType,
        value: 'id',
        label: 'nameTc',
      },
      selectProps: {
        allowClear: true,
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    typeTagSelectorProps: {
      label: '對象標識',
      name: 'typeTagList',
      list: {
        list: typeTagList,
        value: 'id',
        label: 'nameTc',
      },
      selectProps: {
        mode: 'multiple',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
  }
}

export default useFormProps
