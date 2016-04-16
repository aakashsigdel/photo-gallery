'use strict'

import React, {
  Component,
  PropTypes
} from 'react'
import Card from 'material-ui/lib/card/card'
import CardActions from 'material-ui/lib/card/card-actions'
import CardMedia from 'material-ui/lib/card/card-media'
import IconButton from 'material-ui/lib/icon-button'
import FontIcon from 'material-ui/lib/font-icon'
import Checkbox from 'material-ui/lib/checkbox'
import Image from './Image'

export default class ImageCard extends Component {
  _renderCardActions (editable, photo) {
    if (editable) {
      return (
        <CardActions>
          <div className={'image-card-controller'}>
            <IconButton
              tooltip='Drag Image'
              tooltipPosition='bottom-center'
              style={{paddingTop: 0, height: 35, width: 35}}
            >
              <FontIcon className='material-icons' >reorder</FontIcon>
            </IconButton>
            <Checkbox
              style={{width: 24, height: 24}}
              onCheck={() => this.props.toggleSelect(photo.photoId)}
              checked={photo.selected}
            />
            <IconButton
              tooltip='Delete Photo'
              tooltipPosition='bottom-center'
              style={{paddingTop: 0, paddingLeft: 0, height: 35}}
              onClick={() => this.props.deletePhoto(photo.photoId)}
            >
              <FontIcon className='material-icons' >delete</FontIcon>
            </IconButton>
          </div>
        </CardActions>
      )
    }
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
