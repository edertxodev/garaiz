import { ApiResponse } from 'api/utils'
import { ConversationEntity, useGetConversationQuery } from 'api/graphql/generated/graphql'
import graphqlClient from 'api/graphql/graphqlClient'

const useConversation = (id?: string, refetchOnWindowFocus: boolean = true): ApiResponse<ConversationEntity | null> => {
  const response = useGetConversationQuery(graphqlClient, { id }, { refetchOnWindowFocus })

  return {
    data: response.data?.conversation?.data,
    status: response.status,
    refetch: response.refetch,
  }
}

export default useConversation
