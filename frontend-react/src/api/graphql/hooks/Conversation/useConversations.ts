import { ApiResponse } from 'api/utils'
import { ConversationEntity, ConversationFiltersInput, useGetConversationsQuery } from 'api/graphql/generated/graphql'
import graphqlClient from 'api/graphql/graphqlClient'

const useConversations = (filters?: ConversationFiltersInput): ApiResponse<ConversationEntity[]> => {
  const response = useGetConversationsQuery(graphqlClient, { filters })

  return {
    data: response.data?.conversations?.data,
    status: response.status,
    refetch: response.refetch,
  }
}

export default useConversations
