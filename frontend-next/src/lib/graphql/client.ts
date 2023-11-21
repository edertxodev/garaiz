import { GraphQLClient } from 'graphql-request'
import { cookies } from 'next/headers'

const client = new GraphQLClient(`${process.env.API_URL}/graphql`)

export function getClient() {
  const token = cookies().get('token')
  if (token?.value) {
    client.setHeader('Authorization', `Bearer ${token.value}`)
  }

  return client
}
