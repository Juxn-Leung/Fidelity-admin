import React, { useEffect } from 'react'
import { Card } from 'antd'
import UserOpAPI from '@/apis/UserOpAPI'

const Home: React.FC = () => {
  const refresh = async () => {
    try {
      await UserOpAPI.find({})
    } catch (error) {
      return
    }
  }

  useEffect(() => {
    refresh()
  }, [])

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
