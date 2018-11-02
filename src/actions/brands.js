import axios from 'axios'
import {apiUrl} from '../constants'

export const BRANDS_FETCHED = 'BRANDS_FETCHED'

const brandsLoaded = (data, included) => ({
  type: BRANDS_FETCHED,
  payload: {data, included}
})

export const loadBrands = () => {
  return async (dispatch, getState) => {
    try {
      
      const fields = `fields[node--camera_brands]=title`
      const requestUrl = `${apiUrl}/node/camera_brands?${fields}`
      const request = await axios(requestUrl)
      dispatch(brandsLoaded(request.data.data, request.data.included))
    }
    catch(err) {
      console.error(err)
    }
  }
}