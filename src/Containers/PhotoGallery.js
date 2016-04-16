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
          key={index}
          source={photos[photoKey].fileUrl}
          order={photos[photoKey].order}
          editable={editable}
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
          />
        </div>
      </div>
    )
  }
}
