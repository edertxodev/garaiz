import { ApiResponse } from 'api/utils'
import { MessageEntity, MessageFiltersInput, PaginationArg, useGetMessagesQuery } from 'api/graphql/generated/graphql'
import graphqlClient from 'api/graphql/graphqlClient'

const useMessages = (
  filters?: MessageFiltersInput,
  pagination?: PaginationArg,
  sort?: string[]
): ApiResponse<MessageEntity[]> => {
  const response = useGetMessagesQuery(graphqlClient, { filters, pagination, sort })

  return {
    data: response.data?.messages?.data,
    status: response.status,
    refetch: response.refetch,
    pagination: response.data?.messages?.meta.pagination,
  }
}

export default useMessages
