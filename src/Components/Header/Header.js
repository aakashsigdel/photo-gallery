'use strict'

import React, {
  Component,
  PropTypes
} from 'react'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import IconMenu from 'material-ui/lib/menus/icon-menu'
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert'
import MenuItem from 'material-ui/lib/menus/menu-item'

export default class Header extends Component {
  _renderMenuItems (menuItems) {
    menuItems.map((menuItemText, index) => {
      return (
        <MenuItem
          key={index}
          primaryText={menuItemText}
        />
      )
    })
  }
  render () {
    const {
      backgroundColor,
      menuItems,
      title
    } = this.props
    return (
      <AppBar
        title={title}
        style={{backgroundColor: backgroundColor}}
        showMenuIconButton={false}
        iconElementRight={
          <IconMenu iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            {this._renderMenuItems(menuItems)}
          </IconMenu>
        }
      />
    )
  }
}

// default props and proptypes validation
Header.defaultProps = {
  title: 'Photo Gallery',
  menuItems: ['Toggle Permission'],
  backgroundColor: '#C76767'
}

Header.propTypes = {
  title: PropTypes.string,
  menuItems: PropTypes.arrayOf(PropTypes.string),
  backgroundColor: PropTypes.string
}
