'use strict'

import React, {
  Component,
  PropTypes
} from 'react'
import ImageCard from '../Components/ImageCard'
import FAB from '../Components/FAB'

export default class PhotoGallery extends Component {
  _renderImageCards (photos) {
    return photos.map((photo, index) => {
      return (
        <ImageCard
          key={index}
          source={photo.fileUrl}
        />
      )
    })
  }

  render () {
    const { photos } = this.props
    return (
      <div className={'photo-gallery'}>
        {this._renderImageCards(photos)}
        <div className={'fab'}>
          <FAB />
        </div>
      </div>
    )
  }
}
