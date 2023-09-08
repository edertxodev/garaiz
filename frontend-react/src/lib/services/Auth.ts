import { LOCAL_STORAGE_KEYS } from 'lib/constants'
import { User } from 'lib/auth/AuthContext'
import crypto from 'crypto-js'

export const addUserToLocalStorage = (user: User): User => {
  localStorage.setItem(
    LOCAL_STORAGE_KEYS.user,
    crypto.AES.encrypt(JSON.stringify(user), import.meta.env.VITE_ENCRYPTION_KEY).toString()
  )

  return user
}
