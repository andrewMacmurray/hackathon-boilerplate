export default {
  path: '/hello',
  method: 'GET',
  handler: (request, reply) => {
    console.log(request.url)
    reply('hello Hapi Server, this is a test route!')
  }
}
