import axios from 'axios'
import {apiUrl} from '../constants'

export const PHOTOS_FETCHED = 'PHOTOS_FETCHED'
export const CLEAR_PHOTOS = 'CLEAR_PHOTOS'

const photosLoaded = (data,included) => ({
  type: PHOTOS_FETCHED,
  payload: {data, included}
})

export const loadPhotos = () => {
  return async (dispatch, getState) => {
    try {
      const fields = `fields[node--photos]=title,body,field_image,field_photographer,field_camera`
      const include = `include=field_image,field_photographer,field_camera,field_camera.field_brand`
      const requestUrl = `${apiUrl}/node/photos?${fields}&${include}`
      
      const request = await axios(requestUrl)
      dispatch(photosLoaded(request.data.data, request.data.included))
    }
    catch(err) {
      console.error(err)
    }
  }
}

export const loadFilteredPhotos = (field, uuid) => {
  return async (dispatch, getState) => {
    const state = getState()
    if (state.photos.data) dispatch({type: CLEAR_PHOTOS})
    try {
      const filterPath = `filter[${field}][condition][path]=${field}.uuid`
      const filterValue = `filter[${field}][condition][value]=${uuid}`
      const fields = `fields[node--photos]=title,body,field_image,field_photographer,field_camera`
      const include = `include=field_image,field_photographer,field_camera,field_camera.field_brand`
      const requestUrl = `${apiUrl}/node/photos?${fields}&${include}&${filterPath}&${filterValue}`
      
      const request = await axios(requestUrl)
      dispatch(photosLoaded(request.data.data, request.data.included))
    }
    catch(err) {
      console.error(err)
    }
  }
}