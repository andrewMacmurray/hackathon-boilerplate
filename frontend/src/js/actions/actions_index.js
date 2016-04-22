export const GET_USER_DETAILS = 'GET_USER_DETAILS'

export const getUserDetails = () => {
  return {
    type: GET_USER_DETAILS,
    payload: 'some user details'
  }
}
