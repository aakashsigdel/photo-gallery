'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../Components/Header'
import PhotoGallery from './PhotoGallery'
import * as actions from '../actions/photosActionCreators'

class Application extends Component {
  onChange () {
    console.log('changed')
  }

  render () {
    const {
      actions,
      photos
    } = this.props
    return (
      <div>
        <Header />
        <div className='main-container'>
          <PhotoGallery
            photos={photos.data}
            editable
            selectCount={photos.selectCount}
            onChange={this.onChange}
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
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Application)
