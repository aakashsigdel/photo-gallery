import React, {
  Component,
  PropTypes
} from 'react'
import CardActions from 'material-ui/lib/card/card-actions'
import IconButton from 'material-ui/lib/icon-button'
import FontIcon from 'material-ui/lib/font-icon'
import Checkbox from 'material-ui/lib/checkbox'

export default class ImageCardActions extends Component {
  render () {
    const { checked } = this.props
    return (
      <CardActions>
        <div className={'image-card-controller'}>
          <IconButton
            tooltip='Drag Image'
            tooltipPosition='bottom-center'
            style={{
              paddingTop: 0,
              height: 35,
              width: 35,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            className={'image-card-drag'}
          >
            <FontIcon className='material-icons' >reorder</FontIcon>
          </IconButton>
          <Checkbox
            style={{width: 24, height: 24}}
            onCheck={this.props.onCheck}
            checked={checked}
          />
          <IconButton
            tooltip='Delete Photo'
            tooltipPosition='bottom-center'
            style={{paddingTop: 0, paddingLeft: 0, height: 35}}
            onTouchTap={this.props.onDelete}
          >
            <FontIcon className='material-icons' >delete</FontIcon>
          </IconButton>
        </div>
      </CardActions>
    )
  }
}

ImageCardActions.propTypes = {
  checked: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired
}
