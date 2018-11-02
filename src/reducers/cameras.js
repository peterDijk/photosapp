import {CAMERAS_FETCHED} from '../actions/cameras'

export default (state = [], {type, payload}) => {
  switch(type) {
    case CAMERAS_FETCHED:
      return payload
    default:
      return state
  }
}