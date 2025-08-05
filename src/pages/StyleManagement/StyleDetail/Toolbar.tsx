import { RightOutlined } from '@ant-design/icons'
import { Breadcrumb, Button, Flex, Space } from 'antd'
import { useDetail } from '@/contexts/DetailContext'

interface FormProps {
  onSubmit: () => void
}

const Toolbar: React.FC<FormProps> = (props) => {
  const {
    data: {},
  } = useDetail()
  const { onSubmit } = props


  return (
    <>
      <Flex
        justify="space-between"
        align="center"
        className="p-4 bg-white"
        style={{ height: 72 }}
      >
        <Breadcrumb
          separator={<RightOutlined />}
          items={[
            { title: '款式管理' },
            { title: '款式詳情' },
          ]}
        />
          <Space size={16}>
            <Button type="primary" onClick={
              () => onSubmit()
            }>保存</Button>
            <Button color="primary" variant="outlined">返回</Button>
          </Space>
      </Flex>
    </>
  )
}

export default Toolbar
