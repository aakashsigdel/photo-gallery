'use strict'

import React, {
  Component,
  PropTypes
} from 'react'
import Paper from 'material-ui/lib/paper'

export default class Message extends Component {
  render () {
    const {
      message,
      height,
      width
    } = this.props
    const style = {
      height,
      width,
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20
    }

    return (
      <Paper style={style} zDepth={2}>
        {message}
      </Paper>
    )
  }
}

Message.defaultProps = {
  message: 'This is a paper',
  height: 100,
  width: 300
}

Message.propTypes = {
  message: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
}
