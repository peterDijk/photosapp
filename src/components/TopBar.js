import * as React from 'react'


function TopBar(props) {
  const {cameras, photographers, brands} = props
    return (
      <div className="row">
        <div className="col-1-of-3">
          <h1>Coffee table shots</h1>
        </div>
        <div className="col-2-of-3">
          <select type="select" name="photographer" onChange={props.filterChangeHandler}>
              <option value='clear'>no photographer filter </option>
              {(photographers.data && photographers.data.length > 0) &&
                photographers.data.map(photographer => {
                  return (
                    <option key={photographer.id} value={photographer.id}>{photographer.attributes.title}</option>
                  )
                })
              }
          </select>
          <select type="select" name="camera" onChange={props.filterChangeHandler}>
              <option value='clear'>no camera filter </option>
              {(cameras.data && cameras.data.length > 0) &&
                cameras.data.map(camera => {
                  return (
                    <option key={camera.id} value={camera.id}>{camera.attributes.title}</option>
                  )
                })
              }
          </select>
          <select type="select" name="camera.field_brand" onChange={props.filterChangeHandler}>
              <option value='clear'>no brand filter </option>
              {(brands.data && brands.data.length > 0) &&
                brands.data.map(brand => {
                  return (
                    <option key={brand.id} value={brand.id}>{brand.attributes.title}</option>
                  )
                })
              }
          </select>
          <button onClick={props.clearAllFilters}>clear filters</button>
        </div>
      </div>
      
    )
  }

export default TopBar