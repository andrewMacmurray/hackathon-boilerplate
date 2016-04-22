import axios from 'axios'

export const GET_USER_DETAILS = 'GET_USER_DETAILS'

export const getUserDetails = () => {
  const details = axios.get('/user-request')
  return {
    type: GET_USER_DETAILS,
    payload: 'some user details'
  }
}
