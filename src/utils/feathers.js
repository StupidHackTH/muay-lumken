import io from 'socket.io-client'
import feathers from '@feathersjs/client'
import reactive from 'feathers-reactive'

const options = {transports: ['websocket', 'polling']}
const socket = io('http://localhost:3030', options)

const app = feathers()

app.configure(feathers.socketio(socket))
app.configure(feathers.authentication())
app.configure(reactive({idField: 'id'}))

if (typeof window !== 'undefined') {
  window.app = app
}

export default app
