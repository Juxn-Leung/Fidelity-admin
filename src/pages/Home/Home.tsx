import React from 'react'
import { Card } from 'antd'

const Home: React.FC = () => {
  return (
    <div className="page-content">
      <Card
        className="page-card"
        styles={{
          body: {
            height: 'calc(100vh - 94px)',
          },
        }}
      >
        <div className='h-full flex items-center justify-center'>
          <p className='text-3xl'>欢迎使用后台管理系统</p>
        </div>
      </Card>
    </div>
  )
}

export default Home
