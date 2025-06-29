import { validateInfo } from '@/utils/form'
import { useSelector } from 'react-redux'

function useFormProps(required: boolean) {
  const { flagList, applicantTypeList, applicationTypeList } = useSelector(
    (store: any) => store.app
  )
  return {
    // 文件分類模板
    parentSelectorProps: {
      label: '從屬分類',
      name: 'parentId',
      selectProps: {
        allowClear: true,
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    nameTcInputProps: {
      label: '名稱（中文）',
      name: 'nameTc',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    namePtInputProps: {
      label: '名稱（外文）',
      name: 'namePt',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
    codeInputProps: {
      label: '編號',
      name: 'code',
    },
    indexInputProps: {
      label: '序號',
      name: 'index',
    },

    contentTcInputProps: {
      label: '內容（繁）',
      name: 'contentTc',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    contentPtInputProps: {
      label: '內容（葡）',
      name: 'contentPt',
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
    applicantTypeRadioProps: {
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
      required: required,
    },
    applyForTypeRadioProps: {
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
      required: required,
    },
    necessaryNeedRadioProps: {
      label: '是否必填',
      name: 'necessaryNeed',
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

    fileInputProps: {
      label: '', // 文件
      name: 'file',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      inputProps: {
        disabled: true,
        placeholder: '請選擇文件',
      },
      required: required,
    },
    fileNameInputProps: {
      label: '文件名稱',
      name: 'fileName',
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
    supplemenContentInputProps: {
      label: '補交內容',
      name: 'supplemenContent',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
    },
  }
}

export default useFormProps
