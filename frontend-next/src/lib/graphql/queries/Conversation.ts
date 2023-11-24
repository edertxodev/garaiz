import { ConversationFiltersInput, Query, QueryConversationsArgs } from '@/lib/graphql/generated'
import { getClient } from '@/lib/graphql/client'
import { gql } from 'graphql-request'

export async function getConversations(filters?: ConversationFiltersInput) {
  const query = gql`
    query GetConversations($filters: ConversationFiltersInput) {
      conversations(filters: $filters) {
        data {
          id
          attributes {
            uuid
            users {
              data {
                id
                attributes {
                  username
                  name
                  lastname
                  avatar_url
                  email
                  color
                  locale
                }
              }
            }
          }
        }
      }
    }
  `
  const response = await getClient().request<Query, QueryConversationsArgs>(query, { filters })

  return response.conversations
}
