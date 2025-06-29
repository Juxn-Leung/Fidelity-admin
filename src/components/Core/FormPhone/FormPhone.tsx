import React, { useEffect, useState } from 'react'
import FormItem from '../FormItem/FormItem'
import { Input, Select, Space } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getAreaList } from '@/store/festures/appSlice'

interface FormInputProps {
  value: string | number
  areaValue?: string
  prop: any
  colProps?: any
  icon?: any
  handleInput?: (value: string) => void
  handleSelect?: (value: string) => void
  handleClick?: () => void
}

const FormPhone: React.FC<FormInputProps> = (props) => {
  const {
    value,
    areaValue,
    prop,
    colProps,
    icon,
    handleInput,
    handleSelect,
    handleClick,
  } = props

  const { areaList } = useSelector((store: any) => store.app)

  const [inputValue, setInputValue] = useState<string | number>('')
  const [selectValue, setSelectValue] = useState<string>('')

  const onClick = () => {
    handleClick && handleClick()
  }

  const onChange = (e: any) => {
    setInputValue(e.target.value)
    handleInput && handleInput(e.target.value)
  }

  const onSelect = (e: any) => {
    setSelectValue(e)
  }

  useEffect(() => {
    setInputValue(value)
  }, [value])

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAreaList() as any)
  }, [])

  useEffect(() => {
    if (areaList.length) {
      setSelectValue(areaList[0].localizedName)
    }
    if (areaValue) {
      setSelectValue(areaValue)
    }
  }, [areaList])

  useEffect(() => {
    handleSelect && handleSelect(selectValue)
  }, [selectValue])

  return (
    <FormItem
      prop={prop}
      colProps={colProps}
      content={selectValue + '+' + inputValue}
      icon={icon}
      handleClick={onClick}
    >
      <Space.Compact className="w-full">
        {selectValue && (
          <Select
            defaultValue={selectValue}
            value={selectValue}
            style={{ width: '120px' }}
            options={areaList}
            fieldNames={{
              label: 'localizedName',
              value: 'localizedName',
            }}
            placeholder="請選擇"
            onChange={onSelect}
          />
        )}
        <Input
          value={inputValue}
          {...prop.inputProps}
          placeholder="請輸入"
          onChange={onChange}
        />
      </Space.Compact>
    </FormItem>
  )
}

export default FormPhone
