import { ApiResponse } from 'api/utils'
import { ConversationEntity, PaginationArg, useGetConversationQuery } from 'api/graphql/generated/graphql'
import graphqlClient from 'api/graphql/graphqlClient'

const useConversation = (
  id?: string,
  pagination?: PaginationArg,
  sort?: string[],
  refetchOnWindowFocus: boolean = true
): ApiResponse<ConversationEntity | null> => {
  const response = useGetConversationQuery(graphqlClient, { id, pagination, sort }, { refetchOnWindowFocus })

  return {
    data: response.data?.conversation?.data,
    status: response.status,
    refetch: response.refetch,
  }
}

export default useConversation
