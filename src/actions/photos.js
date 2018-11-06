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
    
    const state = getState()
    const {filters, photos} = state

    if (photos.data) { dispatch({type: CLEAR_PHOTOS }) }

    try {
      let filterPaths = ''
      let filterValues = ''
      if (filters.length > 0) {
        filters.forEach(filter => {
          filterPaths += `${filter.filterPath}&`
          filterValues += `${filter.filterValue}&`
        })
      }
      const fields = `fields[node--photos]=title,body,field_image,field_photographer,field_camera`
      const include = `include=field_image,field_photographer,field_camera,field_camera.field_brand`
      const requestUrl = `${apiUrl}/node/photos?${fields}&${include}&${filterPaths}${filterValues}`
      console.log(requestUrl)
      
      const request = await axios(requestUrl)
      dispatch(photosLoaded(request.data.data, request.data.included))
    }
    catch(err) {
      console.error(err)
    }
  }
}
