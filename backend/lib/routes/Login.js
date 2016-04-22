require('env2')('config.env')

const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

module.exports = {
  method: [ 'GET', 'POST' ],
  path: '/login-with-twitter',
  config: {
    auth: 'twitter',
    handler: (request, reply) => {
      if (request.auth.isAuthenticated) {
        const cred = request.auth.credentials
        const secureData = {
          TOKEN: cred.token,
          TOKEN_SECRET: cred.secret,
          USER_ID: cred.profile.id,
        }
        const jwToken = jwt.sign(secureData, JWT_SECRET)
        request.cookieAuth.set({ twitterCookie: jwToken })
        reply.redirect('/')
      }
    }
  }
}
