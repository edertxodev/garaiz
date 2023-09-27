import { ApiResponse } from 'api/utils'
import {
  UsersPermissionsUserEntity,
  UsersPermissionsUserFiltersInput,
  useGetUsersQuery,
} from 'api/graphql/generated/graphql'
import graphqlClient from 'api/graphql/graphqlClient'

const useUsers = (filters?: UsersPermissionsUserFiltersInput): ApiResponse<UsersPermissionsUserEntity[]> => {
  const response = useGetUsersQuery(graphqlClient, { filters })

  return {
    data: response.data?.usersPermissionsUsers?.data,
    status: response.status,
    refetch: response.refetch,
  }
}

export default useUsers
