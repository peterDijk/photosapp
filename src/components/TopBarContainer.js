import * as React from 'react'
import {connect} from 'react-redux'
import {loadFilteredPhotos, loadPhotos} from '../actions/photos'
import {loadCameras} from '../actions/cameras'
import TopBar from './TopBar'


class TopBarContainer extends React.PureComponent {

  componentDidMount() {
    this.props.loadCameras()
  }

  filterChangeHandler = (event) => {
    if (event.target.value === 'clear') {
      this.props.loadPhotos()
    } else {
      this.props.loadFilteredPhotos(`field_${event.target.name}`, event.target.value)
    }
  }

  render() {
    return (
      <TopBar 
        cameras={this.props.cameras}
        filterChangeHandler={this.filterChangeHandler}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  cameras: state.cameras
})

const mapDispatchToProps = {
  loadCameras,
  loadFilteredPhotos,
  loadPhotos
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBarContainer)