import { QueryStatus } from '@tanstack/react-query'

export interface ApiResponse<TData> {
  data: TData | undefined
  status: QueryStatus
  refetch: any
}
