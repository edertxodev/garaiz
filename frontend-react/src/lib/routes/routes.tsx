import { Attributes, Suspense, lazy } from 'react'
import { Navigate, NonIndexRouteObject } from 'react-router-dom'
import AuthRoute from 'lib/middlewares/AuthRoute'
import GuestGuard from 'lib/middlewares/GuestRoute'
import Loader from 'components/common/styled/Loader'

interface AppRouteObject extends NonIndexRouteObject {
  name: string
}

const Loadable = (Component: any) => (props: Attributes) =>
  (
    <Suspense fallback={<Loader fullPage />}>
      <Component {...props} />
    </Suspense>
  )

const Home = Loadable(lazy(() => import('pages/Home')))
const Login = Loadable(lazy(() => import('pages/Login')))
const Profile = Loadable(lazy(() => import('pages/Profile')))
const ChatList = Loadable(lazy(() => import('pages/ChatList')))
const ChatDetail = Loadable(lazy(() => import('pages/ChatDetail')))

const AppRoutes: AppRouteObject[] = [
  { path: '/', element: <Home />, name: 'home' },
  {
    path: '/login',
    element: (
      <GuestGuard>
        <Login />
      </GuestGuard>
    ),
    name: 'login',
  },
  {
    path: '/profile',
    element: (
      <AuthRoute>
        <Profile />
      </AuthRoute>
    ),
    name: 'profile',
  },
  {
    path: '/chat',
    element: (
      <AuthRoute>
        <ChatList />
      </AuthRoute>
    ),
    name: 'chatList',
  },
  {
    path: '/chat/:conversationId',
    element: (
      <AuthRoute>
        <ChatDetail />
      </AuthRoute>
    ),
    name: 'chatDetail',
  },
  { path: '*', element: <Navigate to="/" />, name: 'default' },
]

export default AppRoutes
