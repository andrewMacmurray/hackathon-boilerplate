require('env2')('config.env')

const JWT_SECRET = process.env.JWT_SECRET
import jwt from 'jsonwebtoken'

export default {
  method: 'GET',
  path: '/user-details',
  config: {
    auth: 'session',
    handler: (request, reply) => {
      console.log(request.auth.credentials)
      const decodedData = jwt.verify(request.auth.credentials['twitterCookie'], JWT_SECRET)
      console.log(decodedData, decodedData.screenName)
      reply(decodedData.screenName)
    }
  }
}
