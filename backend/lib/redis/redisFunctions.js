import client from './client.js'
import Bluebird from 'bluebird'

client.LPUSH = Bluebird.promisify(client.LPUSH)
client.LRANGE = Bluebird.promisify(client.LRANGE)

// these are some dummy functions
// make sure to delete these if you're done using them
export const addDummyData = (data) => {
  return client.LPUSH('myList', data)
}

export const getDummyData = () => {
  return client.LRANGE('myList', 0, -1)
}
