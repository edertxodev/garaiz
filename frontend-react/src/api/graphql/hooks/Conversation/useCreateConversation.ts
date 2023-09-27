import { useCreateConversationMutation } from 'api/graphql/generated/graphql'
import graphqlClient from 'api/graphql/graphqlClient'

const useCreateConversation = () => {
  return useCreateConversationMutation(graphqlClient, { retry: false })
}

export default useCreateConversation
