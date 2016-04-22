module.exports = {
  path: '/img/{imageUrl*}',
  method: 'GET',
  handler: {
    directory: { path: './public/img' }
  }
}
