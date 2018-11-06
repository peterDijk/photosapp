import {
  ADD_FILTER,
  CLEAR_ALL_FILTERS
} from '../actions/filters'

export default (state = [], {type, payload}) => {
  switch(type) {
    case ADD_FILTER:
      const withoutSameField = state.filter(fil => fil.field !== payload.field)

      return [...withoutSameField, payload]
    case CLEAR_ALL_FILTERS:
      return []
    default:
      return state
  }
}