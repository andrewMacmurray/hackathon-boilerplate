require('env2')('./config.env')
import createServer from './server.js'
import createClient from './redis/client.js'
import {handleStart} from './helpers/server-helpers.js'

const client = createClient()
const server = createServer(client)

server.start((err) => {
  if (err) {
    console.log('server error: ', err)
  } else {
    console.log('server listening on port: ' + server.info.port)
  }
})
