import { GraphQLClient } from 'graphql-request'
import { defaultHeaders } from 'api/graphql/utils'

const graphqlClient = new GraphQLClient(`${import.meta.env.VITE_API_URL}/graphql`, {
  credentials: 'include',
  mode: 'cors',
  headers: defaultHeaders(),
})

export default graphqlClient
