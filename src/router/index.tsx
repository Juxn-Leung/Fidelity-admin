import { Navigate, createHashRouter } from 'react-router-dom'
import { RequiresAuth } from '@/contexts/AuthContext'
import AppLayout from '@/layouts/AppLayout'
import ErrorBoundary from '@/components/ErrorBoundary'
import PageNotFoundPage from '@/pages/Error/PageNotFound'
import Login from '@/pages/Login'
import HomePage from '@/pages/Home/Home'
import UserPage from '@/pages/UserManagement/UserList'
import BackgroundPage from '@/pages/BackgroundManagement/BackgroundList'
import LogPage from '@/pages/LogManagement/LogList'
import StylePage from '@/pages/StyleManagement/StyleList'
import StyleDetailPage from '@/pages/StyleManagement/StyleDetail'


const router = createHashRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Navigate to="/home" replace />,
  },
  {
    path: '/',
    errorElement: <ErrorBoundary />,
    element: (
      <RequiresAuth>
        <AppLayout></AppLayout>
      </RequiresAuth>
    ),
    children: [
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/user',
        element: <UserPage />,
      },
      {
        path: '/background',
        element: <BackgroundPage />,
      },
      {
        path: '/log',
        element: <LogPage />,
      },
      {
        path: '/style',
        children: [
          {
            path: '',
            element: <StylePage />,
          },
          {
            path: ':id',
            element: <StyleDetailPage />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFoundPage />,
  },
])

export default router
