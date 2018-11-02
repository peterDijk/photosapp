import axios from 'axios'
import {apiUrl} from '../constants'

export const CAMERAS_FETCHED = 'CAMERAS_FETCHED'

const camerasLoaded = (data, included) => ({
  type: CAMERAS_FETCHED,
  payload: {data, included}
})

export const loadCameras = () => {
  return async (dispatch, getState) => {
    try {
      
      const fields = `fields[node--cameras]=title,body,field_brand`
      const include = `include=field_brand`
      const requestUrl = `${apiUrl}/node/cameras?${fields}&${include}`
      const request = await axios(requestUrl)
      dispatch(camerasLoaded(request.data.data, request.data.included))
    }
    catch(err) {
      console.error(err)
    }
  }
}