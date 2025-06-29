import { validateInfo } from '@/utils/form'
import { useSelector } from 'react-redux'

function useFormProps(required: boolean) {
  const { businessTypes, applicationCaseList, appealList } = useSelector(
    (store: any) => store.app
  )

  const appealOption = () => {
    const option: any = []
    appealList?.forEach((item: any) => {
      if (item.appealCode) {
        option.push({
          ...item,
          applicationCode: item.application?.code,
        })
      }
    })
    return option
  }

  const applicationCaseOption = () => {
    console.log('applicationCaseList', applicationCaseList)

    return applicationCaseList?.filter((item: any) => {
      return item.code
    })
  }

  return {
    businessTypeSelectProps: {
      label: '業務種類',
      name: 'businessTypeId',
      list: {
        list: businessTypes,
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

    // 新申請
    applicationIdSelectorProps: {
      label: '申請編號',
      name: 'applicationId',
      list: {
        list: applicationCaseOption(),
        // list: applicationCaseList,
        value: 'id',
        label: 'code',
        // label: 'legalCaseApplyCode',
      },
      selectProps: {
        showSearch: true,
        optionFilterProp: 'legalCaseApplyCode',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    appellantTypeInputProps: {
      label: '申請人或受益人',
      // name: 'appellantType',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    businessReasonInputProps: {
      label: '申請原因',
      name: 'businessReason',
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

    // 司法申訴
    appealIdSelectorProps: {
      label: '申訴編號',
      name: 'applicationId',
      list: {
        list: appealOption(),
        value: 'id',
        label: 'appealCode',
      },
      selectProps: {
        showSearch: true,
        optionFilterProp: 'appealCode',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    petitionerSelectProps: {
      label: '申訴人身份',
      // name: 'applicationId',
      list: {
        list: appealOption(),
        value: 'id',
        label: 'appellantType',
      },
    },
    appealTypeSelectProps: {
      label: '申訴類型',
      // name: 'applicationId',
      list: {
        list: appealOption(),
        value: 'id',
        label: 'appealType',
      },
    },
    personageSelectProps: {
      label: '案件關係人',
      name: 'applicationId',
      list: {
        list: appealOption(),
        value: 'id',
        label: 'appellantName',
        // label: 'stakeholderName',
      },
      selectProps: {
        disabled: true,
        placeholder: '請選擇申訴編號',
      },
    },
    personageSelectProps2: {
      label: '案件關係人',
      name: 'id',
      list: {
        list: [],
        value: 'id',
        label: 'value',
      },
      selectProps: {
        disabled: true,
        placeholder: '申請人或受益人',
      },
    },
    applicationSelectorProps: {
      label: '申請編號',
      name: 'applicationId',
      list: {
        list: appealOption(),
        value: 'id',
        label: 'applicationCode',
      },
      selectProps: {
        disabled: true,
        placeholder: '請選擇申訴編號',
      },
    },
  }
}

export default useFormProps
