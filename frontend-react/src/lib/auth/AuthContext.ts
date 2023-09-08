import { Dispatch, SetStateAction, createContext, useContext } from 'react'
import { Enum_Userspermissionsuser_Gender } from 'api/graphql/generated/graphql'

interface User {
  id?: string
  username?: string
  email?: string
  name?: string
  lastname?: string
  gender?: Enum_Userspermissionsuser_Gender
  birthdate?: Date
  avatar?: string
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
