import { useUpdateUserMutation } from 'api/graphql/generated/graphql'
import graphqlClient from 'api/graphql/graphqlClient'

const useUpdateUser = () => {
  return useUpdateUserMutation(graphqlClient, { retry: false })
}

export default useUpdateUser
