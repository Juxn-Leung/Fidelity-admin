import { validateInfo } from '@/utils/form'
import { useSelector } from 'react-redux'

function useFormProps(required: boolean) {
  const { users } = useSelector((store: any) => store.app)

  return {
    userSelectProps: {
      label: '新持檔人',
      name: 'userId',
      list: {
        list: users,
        value: 'id',
        label: 'username',
      },
      selectProps: {
        showSearch: true,
        optionFilterProp: 'username',
      },
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    rejectReasonInputProps: {
      label: '不接受原因',
      name: 'rejectReason',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
    descriptionsInputProps: {
      label: '審議原因',
      name: 'description',
      formProps: required && {
        rules: validateInfo.infoRequired,
      },
      required: required,
    },
  }
}

export default useFormProps
