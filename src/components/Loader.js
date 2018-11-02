import * as React from 'react'

export default (props) => {
  const size = props.size || 'normal'
  return (
    <div className="loadDiv">
      <div className={`loader loader-${size}`}></div>
    </div>
  )
}