import * as React from 'react'
import {connect} from 'react-redux'
import {loadFilteredPhotos, loadPhotos} from '../actions/photos'
import {loadCameras} from '../actions/cameras'
import {loadPhotographers} from '../actions/photographers'
import {loadBrands} from '../actions/brands'
import TopBar from './TopBar'


class TopBarContainer extends React.PureComponent {

  componentDidMount() {
    this.props.loadCameras()
    this.props.loadPhotographers()
    this.props.loadBrands()
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
        photographers={this.props.photographers}
        brands={this.props.brands}
        filterChangeHandler={this.filterChangeHandler}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  cameras: state.cameras,
  photographers: state.photographers,
  brands: state.brands
})

const mapDispatchToProps = {
  loadCameras,
  loadFilteredPhotos,
  loadPhotos,
  loadPhotographers,
  loadBrands
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBarContainer)