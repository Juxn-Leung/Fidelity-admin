import { Navigate, createHashRouter } from 'react-router-dom'
import { RequiresAuth } from '@/contexts/AuthContext'
import AppLayout from '@/layouts/AppLayout'
import ErrorBoundary from '@/components/ErrorBoundary'
import PageNotFoundPage from '@/pages/Error/PageNotFound'
import HomePage from '@/pages/Home/Home'

import UserPage from '@/pages/UserManagement/UserList'
import BackgroundPage from '@/pages/BackgroundManagement/BackgroundList'
import LogPage from '@/pages/LogManagement/LogList'


const router = createHashRouter([
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
    ],
  },
  {
    path: '*',
    element: <PageNotFoundPage />,
  },
])

export default router
