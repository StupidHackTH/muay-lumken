import createHistory from 'history/createBrowserHistory'

let history = {}

if (typeof window !== 'undefined') {
  history = createHistory()

  window.hist = history
}

export default history
