import {CLEAR_PHOTOS} from './photos'

export const ADD_FILTER = 'ADD_FILTER'
export const REMOVE_FILTER = 'REMOVE_FILTER'
export const CLEAR_FILTER = 'CLEAR_FILTER'
export const CLEAR_ALL_FILTERS = 'CLEAR_ALL_FILTERS'



export const addFilter = (field, value) => {
  const filterPath = `filter[${field}][condition][path]=${field}.uuid`
  const filterValue = `filter[${field}][condition][value]=${value}`
  return ({
    type: ADD_FILTER,
    payload: {field, filterPath, filterValue}
  })
}

export const clearAllFilters = () => (dispatch) => {
  dispatch({type: CLEAR_ALL_FILTERS})
}