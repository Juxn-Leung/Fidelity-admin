import { useState } from 'react'
import { Card, Collapse } from 'antd'
import cn from 'classnames'

const DetailCard = (props: any) => {
  const [isUnwind, setIsUnwind] = useState(true)

  const { children, ...restProps } = props // Exclude children

  const items = [
    {
      key: '1',
      label: props.title,
      style: {
        height: 'calc(100% - 50px)',
      },
      children: (
        <Card
          style={{ borderColor: '#ffffff' }}
          styles={{
            ...props.styles,
            body: {
              padding: 0,
              ...props.styles?.body,
            },
          }}
        >
          {children}
        </Card>
      ),
    },
  ]

  return (
    <Collapse
      defaultActiveKey={['1']}
      collapsible="icon"
      {...restProps} // children is excluded
      className={cn(props.className, 'detail-card', {
        'grow-0': !isUnwind,
        'h-auto': !isUnwind,
      })}
      style={{
        borderColor: '#F8E49D',
        background: '#FEFBF0',
      }}
      onChange={(val) => {
        setIsUnwind(!!val.length)
      }}
      items={items}
    />
  )
}

export default DetailCard
