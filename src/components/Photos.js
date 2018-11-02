import * as React from 'react'
import {imagesBaseUrl} from '../constants'
import Loader from './Loader'

function Photos(props) {
  const {photos} = props
  if (!photos.data) return <Loader size='normal'/>
  return (
    <div className="photo-block-container">
    {photos.data.map(photo => {
      const relImageData = photo.relationships.field_image.data
      const relPhotographerData = photo.relationships.field_photographer.data
      const relCameraData = photo.relationships.field_camera.data

      const imageResource = photos.included.find(obj => obj.id === relImageData.id)
      const photographerResource = photos.included.find(obj => obj.id === relPhotographerData.id)
      const cameraResource = photos.included.find(obj => obj.id === relCameraData.id)
      const brandResource = photos.included.find(obj => obj.id === cameraResource.relationships.field_brand.data.id)
      // console.log(cameraResource.relationships.field_brand.data)
      return (
      <div key={photo.id} className="photoBlock">
        <div className="blockImage-container">
          <img src={`${imagesBaseUrl}${imageResource.attributes.uri.url}`} alt={relImageData.meta.alt} className="blockImage"/>
        </div>
        <div className="imageInfo-container">
          <p>Title: {photo.attributes.title}</p>
          <p>by: {photographerResource.attributes.title}</p>
          <p>camera: {brandResource.attributes.title} {cameraResource.attributes.title}</p> 

        </div>
      </div>
    )})}
  </div>
  )
}

export default Photos