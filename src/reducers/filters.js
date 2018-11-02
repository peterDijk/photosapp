import {
  ADD_FILTER
} from '../actions/filters'

export default (state = [], {type, payload}) => {
  switch(type) {
    case ADD_FILTER:
      return [...state, payload]
    default:
      return state
  }
}