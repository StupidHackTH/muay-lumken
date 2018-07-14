import {RouterStore, syncHistoryWithStore} from 'mobx-react-router'

import history from '../utils/history'

const routing = new RouterStore()

if (typeof window !== 'undefined') {
  syncHistoryWithStore(history, routing)
}

export function matchRoute(pattern) {
  const match = routing.location.pathname.match(pattern)
  if (!match) return null

  return match[1]
}

export default routing
