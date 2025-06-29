import { Input, InputProps, InputRef } from 'antd'
import { useEffect, useRef } from 'react'
import Inputmask from 'inputmask'

function IdentityInput(
  props: Omit<InputProps, 'onChange'> & { onChange?: (value: string) => void }
) {
  const inputRef = useRef<InputRef | null>(null)
  useEffect(() => {
    console.log('useEffect', props.value)
    if (inputRef.current?.input) {
      Inputmask({
        mask: '9999999(9)',
      }).mask(inputRef.current.input)
    }
  }, [])

  useEffect(() => {
    if (!props.value) return
    const formattedValue = String(props.value)
      .replace(/[()]/g, '')
      .slice(0, 8)
    if (formattedValue.length === 8) {
      props.onChange?.(formattedValue.replace(/(.{7})(.)/, '$1($2)'))
    } else {
      props.onChange?.(formattedValue)
    }
  }, [props.value])

  return (
    <Input
      ref={inputRef}
      {...props}
      value={props.value}
      onChange={(event) => {
        const { value } = event.target
        const newValue = value?.replace('(_)', '').replace(/_/g, '')
        props.onChange?.(newValue)
      }}
    ></Input>
  )
}
export default IdentityInput
