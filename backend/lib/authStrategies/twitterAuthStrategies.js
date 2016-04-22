require('env2')('config.env')
const CONSUMER_KEY = process.env.CONSUMER_KEY
const CONSUMER_SECRET = process.env.CONSUMER_SECRET

const TwitterCookie = {
  password: 'password1ajskdhasjkdhasjkdhasjkhdjsakdhajksdhasjkdh',
  cookie: 'twitterCookie',
  redirectTo: '/login-with-twitter',
  isSecure: false
}

const TwitterOauth = {
  provider: 'twitter',
  password: 'password2akjsdsakjdhajksdhajksdhajskdhasjkdhsajkdhasjkdh',
  clientId: CONSUMER_KEY,
  clientSecret: CONSUMER_SECRET,
  isSecure: false
}

module.exports = {
  TwitterCookie: TwitterCookie,
  TwitterOauth: TwitterOauth
}
