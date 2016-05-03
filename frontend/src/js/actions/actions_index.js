import axios from 'axios'
export const GET_USER_DETAILS = 'GET_USER_DETAILS'

export const getUserDetails = () => {
  const data = axios.get('/user-request').then(response => response.data)
  return {
    type: GET_USER_DETAILS,
    payload: data
  }
}
