const tape = require('wrapping-tape')
const createClient = require('../dist/redis/client.js').default
const createServer = require('../dist/server.js').default

var client = null
var server = null

const tests = tape({
  setup: (t) => {
    client = createClient({env: 'TEST'})
    server = createServer(client)
    t.end()
  },

  teardown: (t) => {
    server.stop()
    client.quit()
    t.end()
  }
})

tests('Check server running', (t) => {
  server.inject({method: 'GET', url: '/'}, (res) => {
    t.equal(res.statusCode, 200, 'Assert successful response')
  })
  t.end()
})
