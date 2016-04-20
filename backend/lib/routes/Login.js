require('env2')('config.env')

import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET

export default {
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
        }
        const jwToken = jwt.sign(secureData, JWT_SECRET)
        request.cookieAuth.set({ twitterCookie: jwToken })
        reply.redirect('/')
      }
    }
  }
}
