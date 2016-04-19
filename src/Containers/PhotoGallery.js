import React, {
  Component,
  PropTypes
} from 'react'
import ImageCard from '../Components/ImageCard'
import Sortable from 'sortablejs'

export default class PhotoGallery extends Component {
  constructor () {
    super()
    this.sortablePhotosDecorator = this.sortablePhotosDecorator.bind(this)
  }

  _renderImageCards ({photos, editable}) {
    return Object.keys(photos).map((photoId) => {
      return (
        <ImageCard
          key={photoId}
          source={photos[photoId].fileUrl}
          photo={photos[photoId]}
          editable={editable}
          toggleSelect={this.props.toggleSelect}
          handleDialogOpen={this.props.handleDialogOpen}
        />
      )
    })
  }

  sortablePhotosDecorator (componentInstance) {
    // check if the component is null or not
    if (componentInstance) {
      const options = {
        handle: '.image-card-drag',
        animation: 200,
        onUpdate: ({oldIndex, newIndex}) => this.props.setOrder({oldIndex, newIndex})
      }
      Sortable.create(componentInstance, options)
    }
  }

  render () {
    const {
      editable,
      photos
    } = this.props
    return (
      <div className={'photo-gallery'} ref={this.sortablePhotosDecorator}>
        {this._renderImageCards({photos, editable})}
      </div>
    )
  }
}

PhotoGallery.propTypes = {
  handleDialogOpen: PropTypes.func.isRequired,
  deletePhotos: PropTypes.func.isRequired,
  togglePermission: PropTypes.func.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  setOrder: PropTypes.func.isRequired,
  editable: PropTypes.bool.isRequired,
  selectCount: PropTypes.number.isRequired,
  photos: PropTypes.object.isRequired
}
