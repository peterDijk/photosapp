import * as React from 'react'
import {connect} from 'react-redux'
import {loadPhotos} from '../actions/photos'
import Photos from './Photos'

class PhotosContainer extends React.PureComponent {

  componentWillMount() {
    this.props.loadPhotos()
  }

  render() {
    const {photos} = this.props
    // if (!photos.data) return <Loader/>
    return (
      <Photos 
        photos={photos} 
      />
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