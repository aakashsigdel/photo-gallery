'use strict'

import React, {
  Component,
  PropTypes
} from 'react'
import ImageCard from '../Components/ImageCard'
import FAB from '../Components/FAB'

export default class PhotoGallery extends Component {
  _renderImageCards ({photos, editable}) {
    return Object.keys(photos).map((photoKey, index) => {
      return (
        <ImageCard
          key={photoKey}
          source={photos[photoKey].fileUrl}
          photo={photos[photoKey]}
          editable={editable}
          toggleSelect={this.props.toggleSelect}
          deletePhoto={(photoId) => this.props.deletePhotos([photoId])}
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
          <FAB
            editable={this.props.editable}
            deletePhotos={this.props.deletePhotos}
            selectCount={this.props.selectCount}
            deletePhotos={this.props.deletePhotos}
            togglePermission={this.props.togglePermission}
            photos={photos}
          />
        </div>
      </div>
    )
  }
}
