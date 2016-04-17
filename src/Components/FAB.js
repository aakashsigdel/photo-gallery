'use strict'

import React, {
  Component,
  PropTypes
} from 'react'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import ContentAdd from 'material-ui/lib/svg-icons/content/add'
import MenuItem from 'material-ui/lib/menus/menu-item'
import Popover from 'material-ui/lib/popover/popover'

export default class FAB extends Component {
  constructor () {
    super()
    this.state = {
      open: false // state for popover
    }
    this.handleDeleteTap = this.handleDeleteTap.bind(this)
    this.handleRequestClose = this.handleRequestClose.bind(this)
    this.handleTogglePermission = this.handleTogglePermission.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
  }

  handleMouseEnter (event) {
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    })
  }

  handleRequestClose () {
    this.setState({
      open: false
    })
  }

  handleDeleteTap () {
    const photos = this.props.photos
    const photoIds = Object.keys(photos).reduce((output, photoKey) => {
      if (photos[photoKey].selected) {
        output.push(photoKey)
      }
      return output
    }, [])
    this.props.handleDialogOpen(photoIds)
    this.handleRequestClose()
  }

  handleTogglePermission () {
    this.props.togglePermission()
    this.handleRequestClose()
  }

  _renderDeleteMenu ({editable, selectCount}) {
    if (editable) {
      if (selectCount > 1) {
        return (
          <MenuItem
            primaryText={'Delete'}
            onTouchTap={this.handleDeleteTap}
          />
        )
      } else {
        return (
          <MenuItem
            primaryText={'Delete'}
            disabled
          />
        )
      }
    }
  }

  render () {
    const { editable, selectCount } = this.props
    return (
      <FloatingActionButton
        backgroundColor={'#C76767'}
        onMouseEnter={this.handleMouseEnter}
      >
        <ContentAdd color={'white'} />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          {this._renderDeleteMenu({editable, selectCount})}
          <MenuItem
            primaryText={'Toggle Permission'}
            onTouchTap={this.handleTogglePermission}
          />
        </Popover>
      </FloatingActionButton>
    )
  }
}

FAB.propTypes = {
  handleDialogOpen: PropTypes.func.isRequired,
  togglePermission: PropTypes.func.isRequired,
  photos: PropTypes.object.isRequired,
  editable: PropTypes.bool.isRequired,
  selectCount: PropTypes.number.isRequired
}
