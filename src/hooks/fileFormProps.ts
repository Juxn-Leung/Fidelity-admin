import { validateInfo } from '@/utils/form'
import { useSelector } from 'react-redux'

function useFormProps(required: boolean) {
  const { uploadTypeList, relatedTypeList, flagList } = useSelector(
    (store: any) => store.app
  )

  return {
    fileInputProps: {
      label: '文件',
      name: 'fileName',
    },
    uploadTypeInputProps: {
      label: '上傳方式',
      name: 'uploadType',
      list: {
        list: uploadTypeList,
        value: 'id',
        label: 'nameTc',
      },
    },
    filenameInputProps: {
      label: '文件名稱',
      name: 'filename',
      required: required,
    },
    detailedObjectInputProps: {
      label: '對象',
      name: 'detailedObject',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    detailedDateInputProps: {
      label: '日期',
      name: 'detailedDate',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    detailedCodeInputProps: {
      label: '編號',
      name: 'detailedCode',
    },
    descriptionInputProps: {
      label: '描述',
      name: 'description',
    },
    detailedOtherInfoInputProps: {
      label: '其他',
      name: 'detailedOtherInfo',
    },
    relatedTypeListSelectorProps: {
      label: '關聯類型',
      name: 'relatedTypeList',
      list: {
        list: relatedTypeList,
        value: 'id',
        label: 'nameTc',
      },
      selectProps: {
        mode: 'multiple',
      },
    },
    applicationSubmitObjectIdSelectorProps: {
      label: '關聯遞交物',
      name: 'applicationSubmitObjectId',
      list: {
        list: [],
        value: 'id',
        label: 'nameTc',
      },
    },
    applicationVoucherDraftIdSelectorProps: {
      label: '關聯申請憑證草稿',
      name: 'applicationVoucherDraftId',
      list: {
        list: [],
        value: 'id',
        label: 'nameTc',
      },
    },
    applicationSupplementTaskIdSelectorProps: {
      label: '關聯補交資料任務',
      name: 'applicationSupplementTaskId',
      list: {
        list: [],
        value: 'id',
        label: 'nameTc',
      },
    },
    applicationReportObjectDraftIdSelectorProps: {
      label: '關聯報告物草稿',
      name: 'applicationReportObjectDraftId',
      list: {
        list: [],
        value: 'id',
        label: 'nameTc',
      },
    },
    fileNameInputProps: {
      label: '文件名稱',
      name: 'fileName',
    },
    fileSizeInputProps: {
      label: '文件大小',
      name: 'fileSize',
    },
    fileSourceInputProps: {
      label: '來源情況',
      name: 'fileSource',
    },

    positionInputProps: {
      label: '位置',
      name: 'position',
    },
    oldDataCaseInputProps: {
      label: '舊數據情況',
      name: 'oldDataCase',
    },
    creatorInputProps: {
      label: '創建人',
      name: 'creator',
    },
    createTimeInputProps: {
      label: '創建時間',
      name: 'createTime',
    },
    lastUpdateUserInputProps: {
      label: '最後更新人',
      name: 'lastUpdateUser',
    },
    lastUpdateTimeInputProps: {
      label: '最後更新時間',
      name: 'lastUpdateTime',
    },
    changeTimesInputProps: {
      label: '變更次數',
      name: 'changeTimes',
    },
    objectTypeSelectProps: {
      label: '業務對象類型',
      name: 'objectType',
    },
    objectsSelectProps: {
      label: '業務對象明細',
      name: 'objects',
    },
    submitFileSelectProps: {
      label: '遞交物',
      name: 'businessSubmitFile',
    },
    completedSelectProps: {
      label: '是否完成',
      name: 'completed',
      list: {
        list: flagList,
        value: 'id',
        label: 'nameTc',
      },
    },
    completeDateInputProps: {
      label: '完成日期',
      name: 'completeDate',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },

    disableReasonInputProps: {
      label: '失效原因',
      name: 'disableReason',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
  }
}

export default useFormProps
