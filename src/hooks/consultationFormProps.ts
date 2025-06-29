import { validateInfo } from '@/utils/form'
import { useSelector } from 'react-redux'

function useFormProps(required: boolean) {
  const {
    sourceTypeList,
    objectTypeList,
    consultationTypeList,
    phoneTypeList,
    flagList,
    consultationAccompanierList,
  } = useSelector((store: any) => store.app)

  return {
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
      name: 'sourceOther',
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
        list: consultationAccompanierList,
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
    objectTypeOtherInputProps: {
      label: '其他諮詢對象',
      name: 'objectTypeOther',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
  }
}

export default useFormProps
