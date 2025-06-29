import { Input, InputProps } from 'antd'

function CodeInput(props: InputProps) {
  return <Input maxLength={20} placeholder="請輸入" {...props}></Input>
}
export default CodeInput
