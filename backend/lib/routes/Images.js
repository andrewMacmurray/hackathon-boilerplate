export default {
  path: '/img/{imageUrl*}',
  method: 'GET',
  handler: {
    directory: { path: './public/img' }
  }
}
