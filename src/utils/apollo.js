import {ApolloClient} from 'apollo-client'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {HttpLink} from 'apollo-link-http'
import {onError} from 'apollo-link-error'
import {ApolloLink, split} from 'apollo-link'
import {WebSocketLink} from 'apollo-link-ws'
import {getMainDefinition} from 'apollo-utilities'

function handleError({graphQLErrors, networkError}) {
  if (graphQLErrors)
    graphQLErrors.forEach(({message, locations, path}) => {
      // prettier-ignore
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    })

  if (networkError) {
    console.log(`[Network error]: ${networkError}`)
  }
}

let client = {}

if (typeof window !== 'undefined') {
  const httpLink = new HttpLink({
    uri: 'http://localhost:3030/graphql',
    credentials: 'same-origin',
    onError,
  })

  const wsLink = new WebSocketLink({
    uri: `ws://localhost:3030/subscriptions`,
    options: {
      reconnect: true,
    },
  })

  const link = ApolloLink.from([
    onError(handleError),
    split(
      ({query}) => {
        const {kind, operation} = getMainDefinition(query)
        return kind === 'OperationDefinition' && operation === 'subscription'
      },
      wsLink,
      httpLink,
    ),
  ])

  client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  })
}

export default client
