'use strict'

import React, {
  Component,
  PropTypes
} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../Components/Header'
import PhotoGallery from './PhotoGallery'
import Message from '../Components/Message'
import ConfirmDialog from '../Components/ConfirmDialog'
import * as actions from '../actions/photosActionCreators'

class Application extends Component {
  constructor () {
    super()
    this.state = {
      openDialog: false,
      photoIdsToBeDeleted: []
    }
    this.handleDialogOpen = this.handleDialogOpen.bind(this)
    this.handleDialogClose = this.handleDialogClose.bind(this)
    this.handleDialogConfirm = this.handleDialogConfirm.bind(this)
  }

  componentDidUpdate () {
    if (this.props.photos.changed) {
      this.onChange()
    }
  }

  onChange () {
    this.props.actions.clearChange()
    // console.log(this.props.photos)
    // now photos with order data can be exported
    // as this.props.photos.data
  }

  _renderPhotoGallery ({photos, actions}) {
    if (Object.keys(photos.data).length === 0) {
      return (
        <Message
          message='Sorry! No Phots to display!'
          width={300}
        />
      )
    } else {
      return (
        <PhotoGallery
          photos={photos.data}
          editable={photos.permission}
          selectCount={photos.selectCount}
          onChange={this.onChange}
          handleDialogOpen={this.handleDialogOpen}
          {...actions}
        />
      )
    }
  }

  handleDialogClose () {
    this.setState({
      openDialog: false
    })
  }

  handleDialogOpen (photoIds) {
    this.setState({
      openDialog: true,
      photoIdsToBeDeleted: photoIds
    })
  }

  handleDialogConfirm () {
    this.props.actions.deletePhotos(this.state.photoIdsToBeDeleted)
    this.handleDialogClose()
  }

  render () {
    const {
      actions,
      photos
    } = this.props
    return (
      <div>
        <Header
          selectCount={photos.selectCount}
          handleDialogOpen={this.handleDialogOpen}
          resetSelectCount={actions.resetSelectCount}
          togglePermission={actions.togglePermission}
          photos={photos.data}
        />
        <div className='main-container'>
          {this._renderPhotoGallery({photos, actions})}
        </div>
        <ConfirmDialog
          handleClose={this.handleDialogClose}
          handleConfirm={this.handleDialogConfirm}
          openDialog={this.state.openDialog}
        />
      </div>
    )
  }
}

Application.propTypes = {
  actions: PropTypes.object,
  photos: PropTypes.object
}

// connect to redux
const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Application)
