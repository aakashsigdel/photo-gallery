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
    image.src = source
  }

  _handleImageLoad (source) {
    this.refs.image.src = source
  }

  render () {
    return (
      <a href={this.props.source} target='_blank'>
        <img
          ref={'image'}
          src={require('../assets/images/image_background.gif')}
          className='gallery-image'
        />
      </a>
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
