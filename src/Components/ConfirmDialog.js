import React, {
  Component,
  PropTypes
} from 'react'
import Dialog from 'material-ui/lib/dialog'
import FlatButton from 'material-ui/lib/flat-button'

export default class ConfirmDialog extends Component {
  render () {
    const actions = [
      <FlatButton
        label='Cancel'
        secondary
        onTouchTap={this.props.handleClose}
      />,
      <FlatButton
        label='Okay'
        primary
        keyboardFocused
        onTouchTap={this.props.handleConfirm}
      />
    ]
    return (
      <Dialog
        title='Do you want to delete the selected photos?'
        actions={actions}
        modal={false}
        open={this.props.openDialog}
        onRequestClose={this.props.handleClose}
      />
    )
  }
}

ConfirmDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  openDialog: PropTypes.bool.isRequired
}
