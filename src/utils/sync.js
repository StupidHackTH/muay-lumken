import Realtime from 'feathers-offline-realtime'
import optimisticMutator from 'feathers-offline-realtime/lib/optimistic-mutator'

import app from './feathers'

const capitalize = text => text.charAt(0).toUpperCase() + text.substr(1)

export default async function sync(name, config) {
  const service = app.service(name)

  const options = {
    uuid: true,
    sort: Realtime.multiSort({id: 1}),
    ...config,
  }

  const replicator = new Realtime(service, options)
  app.use(`client${capitalize(name)}`, optimisticMutator({replicator}))

  await replicator.connect()

  return replicator
}
