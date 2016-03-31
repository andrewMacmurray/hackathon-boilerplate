export default {
  path: '/{filename}.js',
  method: 'GET',
  handler: (response, reply) => {
    const js = './public' + response.path
    reply.file(js)
  }
}
