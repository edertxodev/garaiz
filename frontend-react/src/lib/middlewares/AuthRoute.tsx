import { FC, PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'
import { getRoutePathByName } from 'lib/routes/helpers'
import { useAuth } from 'lib/auth/AuthContext'

const AuthGuard: FC<PropsWithChildren> = ({ children }) => {
  const auth = useAuth()

  return auth?.user ? children : <Navigate to={getRoutePathByName('login')} replace />
}

export default AuthGuard
