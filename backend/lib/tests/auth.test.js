const tape = require('wrapping-tape')
const createClient = require('../../dist/redis/client.js').default
const createServer = require('../../dist/server.js').default

var client = null
var server = null

const tests = tape({
  setup: (t) => {
    client = createClient({ env: 'TEST' })
    server = createServer(client)
    t.end()
  },

  teardown: (t) => {
    server.stop()
    client.quit()
    t.end()
  }
})

tests('Check auth is working', (t) => {
  server.inject({ method: 'GET', url: '/login-with-twitter' }, (res) => {
    var actual = res.statusCode
    var expected = 302
    t.equal(expected, actual, 'Assert login with twitter route initiates a redirect')

    actual = res.headers.hasOwnProperty('set-cookie')
    t.ok(actual, 'Assert cookie is being set')

  })

  t.end()
})
