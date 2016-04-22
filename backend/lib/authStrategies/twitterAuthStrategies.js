require('env2')('config.env')
const CONSUMER_KEY = process.env.CONSUMER_KEY
const CONSUMER_SECRET = process.env.CONSUMER_SECRET

module.exports.TwitterCookie = {
  password: 'password1ajskdhasjkdhasjkdhasjkhdjsakdhajksdhasjkdh',
  cookie: 'twitterCookie',
  redirectTo: '/login-with-twitter',
  isSecure: false
}

module.exports.TwitterOauth = {
  provider: 'twitter',
  password: 'password2akjsdsakjdhajksdhajksdhajskdhasjkdhsajkdhasjkdh',
  clientId: CONSUMER_KEY,
  clientSecret: CONSUMER_SECRET,
  isSecure: false
}
