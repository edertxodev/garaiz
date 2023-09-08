import { LOCAL_STORAGE_KEYS } from 'lib/constants'

const DefaultRequestParams = async (): Promise<any> => {
  const tokenCookie = localStorage.getItem(LOCAL_STORAGE_KEYS.token)

  if (tokenCookie) {
    return {
      headers: {
        Authorization: `Bearer ${tokenCookie}`,
      },
    }
  }

  return {
    headers: {},
  }
}

export default DefaultRequestParams
