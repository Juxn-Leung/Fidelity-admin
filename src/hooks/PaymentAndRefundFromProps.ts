import { validateInfo } from '@/utils/form'
import { useSelector } from 'react-redux'

function useFormProps(required: boolean) {
  const {
    paymentNoticeOption,
    agentList,
    applicationCaseList,
    refundTypeOption,
    businessRecordsList,
  } = useSelector((store: any) => store.app)
  const agentTypeOption = paymentNoticeOption.filter((item: any) => {
    return item.id !== 'ARBITRATION'
  })
  const agentOPtion: any[] = []
  agentList?.map((item: any) => {
    agentOPtion.push({
      id: item.id,
      username: item.displayName,
    })
  })
  return {
    // 付款管理
    paymentNoticeTypeRadiosProps: {
      label: '付款通知類型',
      name: 'type',
      list: {
        list: agentTypeOption,
        value: 'id',
        label: 'nameTc',
      },
    },
    businessRecordSelectorProps: {
      label: '付款依據業務',
      name: 'businessRecordId',
      list: {
        list: businessRecordsList,
        value: 'id',
        label: 'businessCode',
      },
      selectProps: {
        showSearch: true,
        allowClear: true,
        optionFilterProp: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    agentSelectorProps: {
      label: '付款對象',
      name: 'agentId',
      list: {
        list: agentOPtion,
        value: 'id',
        label: 'username',
      },
      selectProps: {
        disabled: true,
        // showSearch: true,
        // allowClear: true,
        // optionFilterProp:'username',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      // required: required,
    },
    reasonInputProps: {
      label: '退款原因',
      name: 'reason',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    descriptionInputProps: {
      label: '描述',
      name: 'description',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },

    // base data detail
    noticeCodeInputProps: {
      label: '通知編號',
      name: 'noticeCode',
      formProps: required && {
        rules: [...validateInfo.numberRequired, ...validateInfo.infoRequired],
      },
      required: required,
    },
    objectTypeInputProps: {
      label: '對象類型',
      name: 'objectType',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    registrationDateInputProps: {
      label: '建立日期',
      name: 'registrationDate',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    statusSelectProps: {
      label: '狀態',
      name: 'status',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    receivedSelectProps: {
      label: '是否已被簽收',
      name: 'received',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    sourceSelectProps: {
      label: '數據來源',
      name: 'source',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    dateResolutionHistoryProps: {
      label: '決議日期',
      name: 'dateResolutionHistory',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    caseCodeInputProps: {
      label: '申請編號',
      name: 'caseCode',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    refundRecordSelectProps: {
      label: '關聯的退款記錄',
      name: 'refundRecord',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    refundTypeRadiosProps: {
      label: '退款類型',
      name: 'refundType',
      list: {
        list: refundTypeOption,
        value: 'id',
        label: 'nameTc',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      // required: required,
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
        // disabled: true
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      // required: required
    },
    handlerInputProps: {
      label: '持檔人',
      name: 'handler',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      inputProps: {
        disabled: true,
      },
    },
    agentIdSelectProps: {
      label: '代理人',
      name: 'agentId',
      list: {
        list: [],
        value: 'id',
        label: 'code',
      },
    },
  }
}

export default useFormProps
