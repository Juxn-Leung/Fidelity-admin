import { InputNumber, InputNumberProps } from 'antd'

function AmountInput(props: InputNumberProps) {
  return (
    <InputNumber
      min={0}
      max={9999999999999.99}
      placeholder="請輸入"
      formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={(value) => value?.replace(/\$\s?|(,*)/g, '') as unknown as number}
      {...props}
    ></InputNumber>
  )
}
export default AmountInput
