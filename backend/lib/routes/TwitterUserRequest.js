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
        const options = {
          consumer_key: process.env.CONSUMER_KEY,
          consumer_secret: process.env.CONSUMER_SECRET,
          token: decodedData.TOKEN,
          token_secret: decodedData.TOKEN_SECRET
        }
        // console.log(options, decodedData)
        reply('user can make request with tokens')
      } else {
        reply.redirect('/login-with-twitter')
      }
    }
  }
}
