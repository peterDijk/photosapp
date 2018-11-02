import * as React from 'react'
import Loader from './Loader'


function TopBar(props) {
  const {cameras} = props
    return (
      <div className="topBar">
        <h4>Coffee table shots</h4> | 
        {(cameras.data && cameras.data.length > 0) ?
          <select type="select" name="camera" onChange={props.filterChangeHandler}>
            <option value='clear'>no camera filter </option>
            {cameras.data.map(camera => {

              return (
                <option key={camera.id} value={camera.id}>{camera.attributes.title}</option>
              )
            })}
          </select>
          : <Loader size="small"/>
        }
      </div>
    )
  }

export default TopBar