require('env2')('./config.env')

const Hapi = require('hapi')

// helper methods
const handlePlugins = require('./helpers/server-helpers.js')

// server plugins
const Inert = require('inert')

// server routes
const Images = require('./routes/Images.js')
const ReactUrls = require('./routes/ReactUrls.js')
const Scripts = require('./routes/Scripts.js')

const Plugins = [ Inert ]
const Routes = [ Images, ReactUrls, Scripts ]

module.exports = (client) => {

  const server = new Hapi.Server()

  server.connection({ port: process.env.PORT || 4000 })
  server.register(Plugins, handlePlugins)
  server.route(Routes)

  return server
}
