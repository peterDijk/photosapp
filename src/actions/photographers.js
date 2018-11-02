import axios from 'axios'
import {apiUrl} from '../constants'

export const PHOTOGRAPHERS_FETCHED = 'PHOTOGRAPHERS_FETCHED'

const photographersLoaded = (data, included) => ({
  type: PHOTOGRAPHERS_FETCHED,
  payload: {data, included}
})

export const loadPhotographers = () => {
  return async (dispatch, getState) => {
    try {
      
      const fields = `fields[node--photographers]=title,body,field_website`
      const requestUrl = `${apiUrl}/node/photographers?${fields}`
      const request = await axios(requestUrl)
      dispatch(photographersLoaded(request.data.data, request.data.included))
    }
    catch(err) {
      console.error(err)
    }
  }
}