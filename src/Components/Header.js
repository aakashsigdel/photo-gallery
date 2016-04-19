import React, {
  Component,
  PropTypes
} from 'react'
import AppBar from 'material-ui/lib/app-bar'
import FlatButton from 'material-ui/lib/flat-button'
import IconButton from 'material-ui/lib/icon-button'
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close'

export default class Header extends Component {
  constructor () {
    super()
    this._handleDeleteTap = this._handleDeleteTap.bind(this)
  }

  _renderRightElement (selectCount) {
    return (
      <FlatButton
        labelStyle={{color: this.props.color}}
        onTouchTap={selectCount > 0 ? this._handleDeleteTap : this.props.togglePermission}
        label={selectCount > 0 ? 'Delete' : 'Toggle Permission'}
      />
    )
  }

  _renderLeftElement (selectCount) {
    return selectCount > 0
      ? <IconButton onTouchTap={this.props.resetSelectCount}><NavigationClose /></IconButton>
      : null
  }

  _handleDeleteTap () {
    const photos = this.props.photos
    const photoIds = Object.keys(photos).reduce((output, photoKey) => {
      if (photos[photoKey].selected) {
        output.push(photoKey)
      }
      return output
    }, [])
    this.props.handleDialogOpen(photoIds)
  }

  render () {
    const {
      backgroundColor,
      color,
      selectCount,
      title
    } = this.props
    const generatedTitle = selectCount > 0 ? selectCount + ' photo(s) selected' : title
    const generatedBackgroundColor = selectCount > 0 ? '#F45B69' : backgroundColor
    return (
      <AppBar
        title={generatedTitle}
        titleStyle={{color}}
        showMenuIconButton={selectCount > 0}
        style={{backgroundColor: generatedBackgroundColor}}
        iconElementLeft={this._renderLeftElement(selectCount)}
        iconElementRight={this._renderRightElement(selectCount)}
      />
    )
  }
}

// default props and proptypes validation
Header.defaultProps = {
  title: 'Photo Gallery',
  backgroundColor: '#114B5F',
  color: '#E4FDE1'
}

Header.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  selectCount: PropTypes.number.isRequired,
  photos: PropTypes.object.isRequired,
  handleDialogOpen: PropTypes.func.isRequired,
  togglePermission: PropTypes.func.isRequired,
  resetSelectCount: PropTypes.func.isRequired
}
