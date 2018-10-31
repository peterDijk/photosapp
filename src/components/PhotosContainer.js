import * as React from 'react'
import {connect} from 'react-redux'
import {loadPhotos} from '../actions/photos'

class PhotosContainer extends React.PureComponent {

  componentWillMount() {
    this.props.loadPhotos()
  }

  render() {
    return (
      <div>

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