'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'

class Application extends Component {
  render () {
    console.log(this.props)
    return (
      <div>
        {'Hello world!'}
      </div>
    )
  }
}

export default connect(
  state => ({state})
)(Application)
