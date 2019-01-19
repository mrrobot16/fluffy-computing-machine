import { SEND_DONATION } from '../actions/types'
export function donatationReducer(state, action) {
  switch (action.type) {
    case SEND_DONATION:
      return { ..state }
    break
    default:
      return state
  }
}
