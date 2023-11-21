import { Query, QueryNotesArgs } from '@/lib/graphql/generated'
import { getClient } from '@/lib/graphql/client'
import { gql } from 'graphql-request'

export async function getAllNotes(variables: QueryNotesArgs) {
  const query = gql`
    query GetAllNotes($filters: NoteFiltersInput, $pagination: PaginationArg, $sort: [String]) {
      notes(filters: $filters, pagination: $pagination, sort: $sort) {
        data {
          id
          attributes {
            title
          }
        }
      }
    }
  `
  const response = await getClient().request<Query, QueryNotesArgs>(query, variables)

  return response.notes
}
