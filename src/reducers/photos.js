import {PHOTOS_FETCHED} from '../actions/photos'

export default (state = {}, {type, payload}) => {
  switch(type){
    case PHOTOS_FETCHED:
      return payload
    default:
      return state
  }
}