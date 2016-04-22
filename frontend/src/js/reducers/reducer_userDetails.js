import { GET_USER_DETAILS } from '../actions/actions_index.js'

export default (state = '', action) => {
  switch (action.type) {
  case GET_USER_DETAILS:
    return action.payload
  default:
    return state
  }
}
