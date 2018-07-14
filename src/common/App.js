import React, {Component} from 'react'
import {hot} from 'react-hot-loader'
import {Provider} from 'mobx-react'
import {injectGlobal} from 'react-emotion'
import {ApolloProvider} from 'react-apollo'

import Routes from './Routes'
import stores from './stores'

import client from '../utils/apollo'

injectGlobal`
  body {
    margin: 0;
    color: #555;
    min-height: 100vh;
    font-weight: 300;
    font-family: Roboto, Helvetica Neue, -apple-system, BlinkMacSystemFont, Sukhumvit Set, Segoe UI, Oxygen-Sans, Ubuntu, Cantarell, Kanit, sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider {...stores}>
          <Routes />
        </Provider>
      </ApolloProvider>
    )
  }
}

export default hot(module)(App)
