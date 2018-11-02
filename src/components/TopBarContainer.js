import * as React from 'react'
import {connect} from 'react-redux'
import {loadFilteredPhotos} from '../actions/photos'
import {loadCameras} from '../actions/cameras'
import TopBar from './TopBar'
import Loader from './Loader'

class TopBarContainer extends React.PureComponent {

  componentDidMount() {
    this.props.loadCameras()
  }

  render() {
    return (
      <TopBar cameras={this.props.cameras}/>
    )
  }
}

const mapStateToProps = (state) => ({
  cameras: state.cameras
})

const mapDispatchToProps = {
  loadCameras,
  loadFilteredPhotos
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBarContainer)