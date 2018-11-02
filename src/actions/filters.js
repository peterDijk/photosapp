
export const ADD_FILTER = 'ADD_FILTER'
export const REMOVE_FILTER = 'REMOVE_FILTER'
export const CLEAR_FILTERS = 'CLEAR_FILTERS'

export const addFilter = (field, value) => {
  const filterPath = `filter[${field}][condition][path]=${field}.uuid`
  const filterValue = `filter[${field}][condition][value]=${value}`
  return ({
    type: ADD_FILTER,
    payload: {filterPath, filterValue}
  })
}