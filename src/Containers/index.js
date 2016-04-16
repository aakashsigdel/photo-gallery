'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../Components/Header'
import PhotoGallery from './PhotoGallery'
import _ from 'lodash'

class Application extends Component {
  render () {
    const photos = _.map(_.range(0, 20), function (num) {
      return {
        fileUrl: 'http://loremflickr.com/640/4800?random=' + num
      }
    })
    return (
      <div>
        <Header />
        <div className='main-container'>
          <PhotoGallery
            photos={photos}
          />
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({state})
)(Application)
