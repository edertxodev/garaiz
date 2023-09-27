import { useCreateMessageMutation } from 'api/graphql/generated/graphql'
import graphqlClient from 'api/graphql/graphqlClient'

const useCreateMessage = () => {
  return useCreateMessageMutation(graphqlClient, { retry: false })
}

export default useCreateMessage
