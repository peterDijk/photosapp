import {
  PHOTOS_FETCHED,
  CLEAR_PHOTOS
} from '../actions/photos'

export default (state = {}, {type, payload}) => {
  switch(type){
    case PHOTOS_FETCHED:
      return payload
    case CLEAR_PHOTOS:
      return {}
    default:
      return state
  }
}