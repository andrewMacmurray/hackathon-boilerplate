import redis from 'redis'

const DB_URL = process.env.REDIS_URL || 'redis://localhost:6379'
const DB_NUM = process.env.REDIS_DB || 0
const client = redis.createClient(DB_URL)

client.select(DB_NUM, () => {
  console.log('Connected to Redis database num ', DB_NUM, ' on ', DB_URL)
})

export default client
