'use strict'

import React, {
  Component,
  PropTypes
} from 'react'

export default class Image extends Component {
  componentDidMount () {
    this._renderImage(this.props.source)
  }

  _renderImage (source) {
    const image = new Image()
    image.onLoad = this._handleImageLoad(source)
    image.onError = this._handleImageLoadError
    image.src = source
  }

  _handleImageLoad (source) {
    this.refs.image.src = source
  }

  _handleImageLoadError () {
    console.log('ooopssss!!!')
  }

  render () {
    return (
      <img
        ref={'image'}
        src={require('../assets/images/image_background.gif')}
        className='gallery-image'
      />
    )
  }
}

// proptypes and default props
Image.defaultProps = {
  source: 'http://loremflickr.com/640/4800?random=1'
}

Image.propTypes = {
  source: PropTypes.string.isRequired
}
