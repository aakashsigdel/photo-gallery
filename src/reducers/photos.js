'use strict'

import {
  hydratePhotosDataWithAditionalProperites,
  photosList
} from '../utility'
import {
  SET_SELECT
} from '../actions/actionTypes'

const initialState = hydratePhotosDataWithAditionalProperites(photosList)

const photos = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECT:
      return {
      }
    default:
      return state
  }
}

export default photos
