import {
  ConfigProvider,
  Spin,
  ThemeConfig,
} from 'antd'
import { RouterProvider } from 'react-router-dom'
import zh from 'antd/locale/zh_HK'
import router from './router'
import { Suspense } from 'react'

const theme: ThemeConfig = {
  token: {
    // 修改主題色
    colorPrimary: '#13A07B',
  },
  components: {
    Layout: {
      headerBg: '#13A07B',
      bodyBg: '#f8f8f8',
    },
    Input: {
      // 修改表單焦點邊框顔色
      activeBorderColor: '#13A07B',
    },
    Breadcrumb: {
      colorText: '#13A07B',
      linkColor: '#232323',
      itemColor: '#232323',
      separatorColor: '#232323',
      iconFontSize: 16,
      fontSize: 18,
    },
    Button: {
      colorLink: '#13A07B',
      colorLinkActive: '#13A07B',
      colorLinkHover: '#13A07B',
    },
    Descriptions: {
      labelBg: '#EEF3FA',
      colorSplit: '#E4E5E7',
      borderRadiusLG: 0,
    },
    List: {
      // headerBg: '#13A07B',
    },
    Tabs: {
      cardBg: '#fff',
    },
  },
}

function App() {
  return (
    <ConfigProvider theme={theme} locale={zh}>
      <Suspense fallback={<Spin fullscreen></Spin>}>
        <RouterProvider router={router}></RouterProvider>
      </Suspense>
    </ConfigProvider>
  )
}

export default App
