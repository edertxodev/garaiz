import { ChakraProvider } from '@chakra-ui/react'
import { LOCAL_STORAGE_KEYS } from 'lib/constants'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RecoilRoot } from 'recoil'
import { useEffect, useMemo, useState } from 'react'
import AuthContext, { AuthContextValues, User } from 'lib/auth/AuthContext'
import MainLayout from 'components/MainLayout'
import crypto from 'crypto-js'
import i18next from 'i18next'

const App = () => {
  const queryCache = useMemo(() => new QueryClient(), [])
  const storedUser = localStorage.getItem(LOCAL_STORAGE_KEYS.user)
  const [user, setUser] = useState<User | undefined>(
    storedUser
      ? JSON.parse(crypto.AES.decrypt(storedUser, import.meta.env.VITE_ENCRYPTION_KEY).toString(crypto.enc.Utf8))
      : undefined
  )
  const authContext = useMemo<AuthContextValues>(() => ({ user, setUser }), [user])

  useEffect(() => {
    i18next.changeLanguage(user?.locale?.toLowerCase())
  }, [user?.locale])

  return (
    <QueryClientProvider client={queryCache}>
      <ChakraProvider>
        <AuthContext.Provider value={authContext}>
          <RecoilRoot>
            <MainLayout />
          </RecoilRoot>
        </AuthContext.Provider>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App
