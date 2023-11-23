import { Mutation, MutationUpdateUsersPermissionsUserArgs, UsersPermissionsUserInput } from '@/lib/graphql/generated'
import { getClient } from '@/lib/graphql/client'
import { gql } from 'graphql-request'

export async function updateUser(id: string, data: UsersPermissionsUserInput) {
  const mutation = gql`
    mutation UpdateUser($id: ID!, $data: UsersPermissionsUserInput!) {
      updateUsersPermissionsUser(id: $id, data: $data) {
        data {
          id
        }
      }
    }
  `
  const response = await getClient().request<Mutation, MutationUpdateUsersPermissionsUserArgs>(mutation, { id, data })

  return response.updateUsersPermissionsUser
}
