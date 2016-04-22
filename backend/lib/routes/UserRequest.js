require('env2')('config.env')

const JWT_SECRET = process.env.JWT_SECRET
const jwt = require('jsonwebtoken')

module.exports = {
  method: 'GET',
  path: '/user-request',
  config: {
    auth: 'session',
    handler: (request, reply) => {
      if (request.auth.isAuthenticated) {
        const decodedData = jwt.verify(request.auth.credentials.twitterCookie, JWT_SECRET)
        reply('user can make request with tokens')
      } else {
        reply.redirect('/login-with-twitter')
      }
    }
  }
}
