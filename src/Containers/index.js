'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../Components/Header/Header'

class Application extends Component {
  render () {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default connect(
  state => ({state})
)(Application)
