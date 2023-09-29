import { useAuth } from 'lib/auth/AuthContext'

const useUserColor = () => {
  const auth = useAuth()

  return auth?.user?.color?.toLowerCase()
}

export default useUserColor
