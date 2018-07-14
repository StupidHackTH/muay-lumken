import {enableLogging} from 'mobx-logger'

import routing from './routing'

const stores = {routing}

if (typeof window !== 'undefined') {
  if (process.env.NODE_ENV === 'development') {
    enableLogging()
  }

  window.stores = stores
}

export default stores
