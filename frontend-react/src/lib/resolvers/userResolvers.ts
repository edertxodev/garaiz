import { Maybe, UsersPermissionsUser } from 'api/graphql/generated/graphql'
import { User } from 'lib/auth/AuthContext'

export const resolveUserCompleteName = (user?: Maybe<UsersPermissionsUser | User>) => {
  return user?.name || user?.lastname ? `${user?.name} ${user.lastname}` : user?.username
}
