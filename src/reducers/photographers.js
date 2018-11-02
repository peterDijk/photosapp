import {PHOTOGRAPHERS_FETCHED} from '../actions/photographers'

export default (state = [], {type, payload}) => {
  switch(type){ 
    case PHOTOGRAPHERS_FETCHED:
      return payload
    default: 
      return state
  }
}

