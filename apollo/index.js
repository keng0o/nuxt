import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { BatchHttpLink } from 'apollo-link-batch-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { parse } from 'cookie'

const GRAPHQL_API = 'https://api.graph.cool/simple/v1/cjlnhk7im03tc0127qitoms59'

export default ctx => {
  const httpLink = new BatchHttpLink({
    uri: GRAPHQL_API,
    // credentials: 'same-origin',
    batchInterval: 10,
  })

  const authLink = setContext((_, { headers }) => {
    const token = process.server
      ? parse(ctx.req.headers.cookie || '').accessToken
      : window.__NUXT__.state.accessToken
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : null,
      },
    }
  })

  return {
    link: ApolloLink.from([authLink, httpLink]),
    cache: new InMemoryCache(),
  }
}
