import * as React from 'react'
import {imagesBaseUrl} from '../constants'

function Photos(props) {
  const {photos} = props
  return (
    <div className="photo-block-container">
    {photos.data.map(photo => {
      const relImageData = photo.relationships.field_image.data
      const relImageId = photo.relationships.field_image.data.id
      const imageResource = photos.included.find(obj => obj.id === relImageId)
      return (
      <div key={photo.id} className="photoBlock">
        <div className="blockImage">
          <img src={`${imagesBaseUrl}${imageResource.attributes.uri.url}`} alt={relImageData.meta.alt} className="blockImage"/>
        </div>
        <div>{photo.attributes.title}</div>
      </div>
    )})}
  </div>
  )
}

export default Photos