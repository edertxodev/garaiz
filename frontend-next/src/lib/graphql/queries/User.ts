import { Query, QueryUsersPermissionsUserArgs } from '@/lib/graphql/generated'
import { getClient } from '@/lib/graphql/client'
import { gql } from 'graphql-request'

export async function getProfile(id?: string) {
  const query = gql`
    query GetUser($id: ID) {
      usersPermissionsUser(id: $id) {
        data {
          id
          attributes {
            name
            lastname
            birthdate
            gender
            avatar_url
            color
            locale
          }
        }
      }
    }
  `
  const response = await getClient().request<Query, QueryUsersPermissionsUserArgs>(query, { id })

  return response.usersPermissionsUser
}
