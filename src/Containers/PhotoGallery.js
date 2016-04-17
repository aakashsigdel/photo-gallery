'use strict'

import React, {
  Component,
  PropTypes
} from 'react'
import ImageCard from '../Components/ImageCard'
import FloatingActionButton from '../Components/FAB'
import ConfirmDialog from '../Components/ConfirmDialog'

export default class PhotoGallery extends Component {
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
    this.props.deletePhotos(this.state.photoIdsToBeDeleted)
    this.handleDialogClose()
  }

  _renderImageCards ({photos, editable}) {
    return Object.keys(photos).map((photoKey) => {
      return (
        <ImageCard
          key={photoKey}
          source={photos[photoKey].fileUrl}
          photo={photos[photoKey]}
          editable={editable}
          toggleSelect={this.props.toggleSelect}
          handleDialogOpen={this.handleDialogOpen}
        />
      )
    })
  }

  render () {
    const { photos, editable } = this.props
    return (
      <div className={'photo-gallery'}>
        {this._renderImageCards({photos, editable})}
        <div className={'fab'}>
          <FloatingActionButton
            editable={this.props.editable}
            selectCount={this.props.selectCount}
            togglePermission={this.props.togglePermission}
            handleDialogOpen={this.handleDialogOpen}
            photos={photos}
          />
          <ConfirmDialog
            handleClose={this.handleDialogClose}
            handleConfirm={this.handleDialogConfirm}
            openDialog={this.state.openDialog}
          />
        </div>
      </div>
    )
  }
}

PhotoGallery.propTypes = {
  deletePhotos: PropTypes.func.isRequired,
  togglePermission: PropTypes.func.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  editable: PropTypes.bool.isRequired,
  selectCount: PropTypes.number.isRequired,
  photos: PropTypes.object.isRequired
}
