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

  handleDeleteTap (photos) {
    const photoIds = Object.keys(photos).reduce((output, photoKey, index) => {
      if (photos[photoKey].selected) {
        output.push(photoKey)
      }
      return output
    }, [])
    this.props.deletePhotos(photoIds)
  }

  _renderDeleteMenu ({editable, selectCount}) {
    if (editable) {
      if (selectCount > 0) {
        return <MenuItem
          primaryText={'Delete'}
          onClick={() => this.handleDeleteTap(this.props.photos)}
          />
      } else {
        return <MenuItem
          primaryText={'Delete'}
          disabled
        />
      }
    }
  }

  render () {
    const { editable, selectCount } = this.props
    return (
      <FloatingActionButton
        backgroundColor={'#C76767'}
        onMouseEnter={(event) => this.handleMouseEnter(event)}
      >
        <ContentAdd color={'white'} />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={() => this.handleRequestClose()}
        >
          {this._renderDeleteMenu({editable, selectCount})}
          <MenuItem primaryText={'Toggle Permission'} />
        </Popover>
      </FloatingActionButton>
    )
  }
}
