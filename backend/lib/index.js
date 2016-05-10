require('env2')('./config.env')
const createServer = require('./server.js')
const createClient = require('./redis/client.js')

// with redis
// const client = createClient()
// const server = createServer(client)

// without redis
const server = createServer()

server.start((err) => {
  if (err) {
    console.log('server error: ', err)
  } else {
    console.log('server listening on port: ' + server.info.port)
  }
})
