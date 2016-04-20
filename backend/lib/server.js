require('env2')('./config.env')

import Hapi from 'hapi'

// helper methods
import { handlePlugins } from './helpers/server-helpers.js'

// server plugins
import Inert from 'inert'
import Bell from 'bell'
import AuthCookie from 'hapi-auth-cookie'

// server routes
import Hello from './routes/Hello.js'
import Images from './routes/Images.js'
import ReactUrls from './routes/ReactUrls.js'
import Scripts from './routes/Scripts.js'
import Login from './routes/Login.js'
import UserRequest from './routes/UserRequest.js'

// auth strategies
import { TwitterCookie, TwitterOauth } from './authStrategies/twitterAuthStrategies.js'

const Plugins = [ Inert, Bell, AuthCookie ]
const Routes = [ Login, Images, ReactUrls, Scripts, Hello, UserRequest ]

export default (client) => {

  const server = new Hapi.Server()

  server.connection({
    port: process.env.PORT || 4000,
    routes: {
      cors: true
    }
  })

  server.register(Plugins, handlePlugins)
  server.auth.strategy('twitter', 'bell', TwitterOauth)
  server.auth.strategy('session', 'cookie', TwitterCookie)
  server.route(Routes)

  return server
}
