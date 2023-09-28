import { useDeleteMessageMutation } from 'api/graphql/generated/graphql'
import graphqlClient from 'api/graphql/graphqlClient'

const useDeleteMessage = () => {
  return useDeleteMessageMutation(graphqlClient, { retry: false })
}

export default useDeleteMessage
