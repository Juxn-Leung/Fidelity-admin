import { SelectProps } from 'antd'
import AsyncSelect from './AsyncSelect'
import { fetchCurrencyOptions } from '@/services/fetchOptions'

function CurrencySelect(props: SelectProps) {
  return (
    <AsyncSelect
      fetchOptions={fetchCurrencyOptions}
      {...props}
      style={{ minWidth: 120 }}
    ></AsyncSelect>
  )
}
export default CurrencySelect
