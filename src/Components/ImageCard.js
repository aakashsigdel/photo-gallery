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
  render () {
    return (
      <Card
        className={'gallery-card'}
      >
        <CardMedia>
          <Image />
        </CardMedia>
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
            />
            <IconButton
              tooltip='Delete Photo'
              tooltipPosition='bottom-center'
              style={{paddingTop: 0, height: 35, width: 47}}
            >
              <FontIcon className='material-icons' >delete_forever</FontIcon>
            </IconButton>
          </div>
        </CardActions>
      </Card>
    )
  }
}
