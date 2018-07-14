import {Component} from 'react'
import {observable} from 'mobx'
import {observer} from 'mobx-react'
import sift from 'sift'

import sync from '../utils/sync'

@observer
export default class Query extends Component {
  @observable store = {data: [], loading: true, error: null}

  async componentDidMount() {
    await this.setup()
  }

  setup = async () => {
    let {service, query, sifter, id} = this.props
    const options = {}

    if (query) {
      options.query = query
      options.publication = sift(sifter || query)
    }

    if (id) {
      id = parseInt(id) || id

      options.query = {id}
      options.publication = sift({id})
    }

    options.subscriber = (records, {action, ...event}) => {
      this.store.data = id ? records[0] : records

      console.log(`[> Sync ${service}]`, action, records, event)
    }

    this.sync = await sync(service, options)
    this.store.loading = false
  }

  async componentDidUpdate(prev) {
    if (this.props.id !== prev.id || this.props.query !== prev.query) {
      console.log('Query or ID Updated. Re-syncing...', this.props)

      await this.sync.disconnect()
      await this.setup()
    }
  }

  componentWillUnmount() {
    this.sync.disconnect()
  }

  render() {
    const {id, children} = this.props
    const {data, loading, error} = this.store

    const isLoading = (id && data && !data.id) || loading

    return children(data, isLoading, error)
  }
}
