import axios from 'axios'
import {apiUrl} from '../constants'

export const PHOTOS_FETCHED = 'PHOTOS_FETCHED'

const photosLoaded = (data,included) => ({
  type: PHOTOS_FETCHED,
  payload: {data, included}
})

export const loadPhotos = () => {
  return async (dispatch, getState) => {
    try {
      const fields = `fields[node--photos]=title,body,field_image,field_photographer,field_camera`
      const include = `include=field_image,field_photographer,field_camera`
      const requestUrl = `${apiUrl}/node/photos?${fields}&${include}`
      
      const request = await axios(requestUrl)
      dispatch(photosLoaded(request.data.data, request.data.included))
    }
    catch(err) {
      console.error(err)
    }
  }
}