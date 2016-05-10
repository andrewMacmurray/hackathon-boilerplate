import { GENERIC_ACTION } from '../actions/actions_index.js'

export default (state = '', action) => {
  switch (action.type) {
  case GENERIC_ACTION:
    return action.payload
  default:
    return state
  }
}
