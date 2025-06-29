import { Input  } from 'antd'
import { TextAreaProps } from 'antd/es/input'

type TextAreaType = 'content' | 'address' | 'description' | 'contactContent'

function TextAreaComponent(
  props: TextAreaProps & {
    type: TextAreaType
  }
) {
  const { type, ...rest } = props
  const typeList = [
    { type: 'address', maxLength: 300 },
    { type: 'contactContent', maxLength: 256 },
    { type: 'content', maxLength: 500 },
    { type: 'description', maxLength: 1000 },
  ]
  const maxLength = typeList.find((ele) => ele.type === type)?.maxLength

  return (
    <Input.TextArea
      placeholder="請輸入"
      allowClear
      maxLength={maxLength}
      showCount
      autoSize={{
        minRows: 2
      }}
      {...rest}
    />
  )
}

export default TextAreaComponent
