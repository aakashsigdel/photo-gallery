import React, {
  Component,
  PropTypes
} from 'react'
import Card from 'material-ui/lib/card/card'
import CardMedia from 'material-ui/lib/card/card-media'
import Image from './Image'
import ImageCardActions from './ImageCardActions'

export default class ImageCard extends Component {
  constructor () {
    super()
    // pre binding methods
    this.handleOnCheck = this.handleOnCheck.bind(this)
    this.handleOnTouchTapDeletePhoto = this.handleOnTouchTapDeletePhoto.bind(this)
  }

  handleOnCheck () {
    this.props.toggleSelect(this.props.photo.photoId)
  }

  handleOnTouchTapDeletePhoto () {
    this.props.handleDialogOpen([this.props.photo.photoId])
  }

  _renderCardActions (editable, photo) {
    if (editable) {
      return (
        <ImageCardActions
          checked={photo.selected}
          onCheck={this.handleOnCheck}
          onDelete={this.handleOnTouchTapDeletePhoto}
        />
      )
    }
    return null
  }

  render () {
    const { editable, photo } = this.props
    const cardStyle = editable ? null : {height: 175}
    return (
      <Card
        style={cardStyle}
        className={'gallery-card'}
      >
        <CardMedia>
          <Image
            source={photo.fileUrl}
          />
        </CardMedia>
        {this._renderCardActions(editable, photo)}
      </Card>
    )
  }
}

ImageCard.propTypes = {
  handleDialogOpen: PropTypes.func.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  editable: PropTypes.bool.isRequired,
  photo: PropTypes.object.isRequired
}
