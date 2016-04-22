require('env2')('./config.env')

const Hapi = require('hapi')

// helper methods
const handlePlugins = require('./helpers/server-helpers.js')

// server plugins
const Inert = require('inert')
const Bell = require('bell')
const AuthCookie = require('hapi-auth-cookie')

// server routes
const Hello = require('./routes/Hello.js')
const Images = require('./routes/Images.js')
const ReactUrls = require('./routes/ReactUrls.js')
const Scripts = require('./routes/Scripts.js')
const Login = require('./routes/Login.js')
const UserRequest = require('./routes/TwitterUserRequest.js')

// auth strategies
const authStrategies = require('./authStrategies/twitterAuthStrategies.js')

const Plugins = [ Inert, Bell, AuthCookie ]
const Routes = [ Login, Images, ReactUrls, Scripts, Hello, UserRequest ]

module.exports = (client) => {

  const server = new Hapi.Server()

  server.connection({
    port: process.env.PORT || 4000,
    routes: {
      cors: true
    }
  })

  server.register(Plugins, handlePlugins)
  server.auth.strategy('twitter', 'bell', authStrategies.TwitterOauth)
  server.auth.strategy('session', 'cookie', authStrategies.TwitterCookie)
  server.route(Routes)

  return server
}
