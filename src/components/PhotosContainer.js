import * as React from 'react'
import '../css/main.css'
import {connect} from 'react-redux'
import {loadPhotos} from '../actions/photos'
import Loader from './Loader'

class PhotosContainer extends React.PureComponent {

  componentWillMount() {
    this.props.loadPhotos()
  }

  render() {
    const {photos} = this.props
    if (!photos.data) return <Loader/>
    return (
      <div>
        {photos.data.map(photo => (
          <div key={photo.id}>
            <div>{photo.attributes.title}</div>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  photos: state.photos
})

const mapDispatchToProps = {
  loadPhotos
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotosContainer)