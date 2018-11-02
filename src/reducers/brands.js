import {BRANDS_FETCHED} from '../actions/brands'

export default (state = [], {type, payload}) => {
  switch(type) {
    case BRANDS_FETCHED:
      return payload
    default:
      return state
  }
}