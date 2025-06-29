import { useState } from 'react'
import { Card, Collapse } from 'antd'
import cn from 'classnames'
const { Panel } = Collapse

const DetailCard = (props: any) => {
  const [isUnwind, setIsUnwind] = useState(true)
  return (
    <Collapse
      defaultActiveKey={['1']}
      collapsible="icon"
      {...props}
      className={cn(props.className, 'detail-card', {
        'grow-0': !isUnwind,
        'h-auto': !isUnwind,
      })}
      style={{
        borderColor: '#c4e4ce',
        background: '#f0fffa',
      }}
      onChange={(val) => {
        if (val.length) {
          setIsUnwind(true)
        } else {
          setIsUnwind(false)
        }
      }}
    >
      <Panel
        bordered
        {...props}
        title={null}
        header={props.title}
        key="1"
        style={{
          height: 'calc(100% - 50px)',
        }}
        styles={{
          header: {
            color: '#13A07B',
          },
        }}
      >
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
          {props?.children}
        </Card>
      </Panel>
    </Collapse>
  )
}
export default DetailCard
