import * as React from 'react'
import '../css/main.css'
import {connect} from 'react-redux'
import {loadPhotos} from '../actions/photos'
import Loader from './Loader'
import Photos from './Photos'

class PhotosContainer extends React.PureComponent {

  componentWillMount() {
    this.props.loadPhotos()
  }

  render() {
    const {photos} = this.props
    if (!photos.data) return <Loader/>
    return (
      <Photos photos={this.props.photos} />
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