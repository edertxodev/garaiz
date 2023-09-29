import {
  Enum_Userspermissionsuser_Color as ColorEnum,
  Enum_Userspermissionsuser_Gender as GenderEnum,
} from 'api/graphql/generated/graphql'
import { Dispatch, SetStateAction, createContext, useContext } from 'react'

interface User {
  id?: string | null
  username?: string
  email?: string
  name?: string | null
  lastname?: string | null
  gender?: GenderEnum | null
  birthdate?: string
  avatar_url?: string | null
  color?: ColorEnum
}

interface AuthContextValues {
  user?: User
  setUser: Dispatch<SetStateAction<User | undefined>>
}

const AuthContext = createContext<AuthContextValues | undefined>(undefined)

const useAuth = () => useContext(AuthContext)

export default AuthContext
export { useAuth }
export type { AuthContextValues, User }
