import { Maybe, UsersPermissionsUser } from 'api/graphql/generated/graphql'

export const resolveUserCompleteName = (user?: Maybe<UsersPermissionsUser>) => {
  return user?.name || user?.lastname ? `${user?.name} ${user.lastname}` : user?.username
}
