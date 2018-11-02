import * as React from 'react'
import {connect} from 'react-redux'
import {loadPhotos} from '../actions/photos'
import Photos from './Photos'

class PhotosContainer extends React.PureComponent {

  componentDidMount() {
    this.props.loadPhotos()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.filters !== this.props.filters) {
      this.props.loadPhotos()
    }
  }

  render() {
    const {photos} = this.props
    return (
      <Photos 
        photos={photos} 
      />
    )
  }
}

const mapStateToProps = (state) => ({
  photos: state.photos,
  filters: state.filters
})

const mapDispatchToProps = {
  loadPhotos
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotosContainer)