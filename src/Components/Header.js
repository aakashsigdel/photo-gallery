'use strict'

import React, {
  Component,
  PropTypes
} from 'react'
import AppBar from 'material-ui/lib/app-bar'

export default class Header extends Component {
  render () {
    const {
      backgroundColor,
      title
    } = this.props
    return (
      <AppBar
        title={title}
        style={{backgroundColor: backgroundColor}}
        showMenuIconButton={false}
      />
    )
  }
}

// default props and proptypes validation
Header.defaultProps = {
  title: 'Photo Gallery',
  backgroundColor: '#C76767'
}

Header.propTypes = {
  title: PropTypes.string,
  backgroundColor: PropTypes.string
}
