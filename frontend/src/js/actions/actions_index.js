export const GENERIC_ACTION = 'GENERIC_ACTION'

export const genericAction = () => {
  return {
    type: GENERIC_ACTION,
    payload: 'some data to pass into your app'
  }
}
