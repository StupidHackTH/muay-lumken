import React from 'react'
import ReactDOM from 'react-dom'

import App from './common/App'

import 'normalize.css'

if (process.env.NODE_ENV !== 'development' && typeof window !== 'undefined') {
  require('offline-plugin/runtime').install()
}

if (typeof document !== 'undefined') {
  const renderMethod = module.hot
    ? ReactDOM.render
    : ReactDOM.hydrate || ReactDOM.render

  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'))
  }

  // Render!
  render(App)
}

export default App
