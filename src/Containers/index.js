'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../Components/Header'
import PhotoGallery from './PhotoGallery'
import Message from '../Components/Message'
import * as actions from '../actions/photosActionCreators'

class Application extends Component {
  onChange () {
    console.log('changed')
  }
  componentDidUpdate () {
    if (this.props.photos.changed) {
      this.onChange()
    }
  }

  _renderPhotoGallery ({photos, actions}) {
    if (Object.keys(photos.data).length === 0) {
      return <Message
        message='Sorry! No Phots to display!'
        width={300}
      />
    } else {
      return <PhotoGallery
        photos={photos.data}
        editable={photos.permission}
        selectCount={photos.selectCount}
        onChange={this.onChange}
        {...actions}
      />

    }
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
          {this._renderPhotoGallery({photos, actions})}
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
