require('env2')('config.env')

const JWT_SECRET = process.env.JWT_SECRET
const jwt = require('jsonwebtoken')
const req = require('request')

module.exports = {
  method: 'GET',
  path: '/user-request',
  config: {
    auth: 'session',
    handler: (request, reply) => {
      if (request.auth.isAuthenticated) {
        const decodedData = jwt.verify(request.auth.credentials.twitterCookie, JWT_SECRET)
        const auth = {
          consumer_key: process.env.CONSUMER_KEY,
          consumer_secret: process.env.CONSUMER_SECRET,
          token: decodedData.TOKEN,
          token_secret: decodedData.TOKEN_SECRET
        }
        const url = 'https://api.twitter.com/1.1/users/show.json?screen_name=a_macmurray'
        req.get({ url: url, oauth: auth}, (err, response, body) => {
          reply(body)
        })
      } else {
        reply.redirect('/')
      }
    }
  }
}
