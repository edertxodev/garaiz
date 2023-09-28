import { useDeleteConversationMutation } from 'api/graphql/generated/graphql'
import graphqlClient from 'api/graphql/graphqlClient'

const useDeleteConversation = () => {
  return useDeleteConversationMutation(graphqlClient, { retry: false })
}

export default useDeleteConversation
