module.exports = {
  path: '/hello',
  method: 'GET',
  handler: (request, reply) => {
    reply('hello Hapi Server, this is a test route!')
  }
}
