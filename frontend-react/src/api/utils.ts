import { Pagination } from 'api/graphql/generated/graphql'
import { QueryStatus } from '@tanstack/react-query'

export interface ApiResponse<TData> {
  data: TData | undefined
  status: QueryStatus
  refetch: any
  pagination?: Pagination
}
