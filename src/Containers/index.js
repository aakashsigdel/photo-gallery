'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../Components/Header'
import PhotoGallery from './PhotoGallery'
import * as actions from '../actions/photosActionCreators'

class Application extends Component {
  render () {
    const { photos, actions } = this.props
    return (
      <div>
        <Header />
        <div className='main-container'>
          <PhotoGallery
            photos={photos}
            editable
            {...actions}
          />
        </div>
      </div>
    )
  }
}

// connect to redux
const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions)}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Application)
