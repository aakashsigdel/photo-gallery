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
      open: false
    }
  }

  handleTouchTap (event) {
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

  render () {
    return (
      <FloatingActionButton
        backgroundColor={'#C76767'}
        onMouseEnter={(event) => this.handleTouchTap(event)}
      >
        <ContentAdd color={'white'} />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={() => this.handleRequestClose()}
        >
          <MenuItem primaryText={'Delete'} />
          <MenuItem primaryText={'Toggle Permission'} />
        </Popover>
      </FloatingActionButton>
    )
  }
}
