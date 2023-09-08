import { LOCAL_STORAGE_KEYS } from 'lib/constants'

export const defaultHeaders = (): any => {
  const tokenCookie = localStorage.getItem(LOCAL_STORAGE_KEYS.token)

  if (tokenCookie) {
    return {
      Authorization: `Bearer ${tokenCookie}`,
    }
  }

  return {}
}

export const getLocaleFromLocalStorage = () => {
  const localeKey = localStorage.getItem(LOCAL_STORAGE_KEYS.locale)
  return localeKey === 'eu' ? `${localeKey}-ES` : localeKey
}
