import redis from 'redis'
import bluebird from 'bluebird'

bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)

export default (opts) => {

  const config = {
    url: process.env.REDIS_URL || 'redis://localhost:6379',
    db: process.env.REDIS_DB || 0
  }

  if (opts && opts.env === 'TEST') config.db = 5

  return redis.createClient(config)
}
