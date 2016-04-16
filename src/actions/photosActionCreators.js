'use strict'

import {
  TOGGLE_SELECT,
  DELETE_PHOTOS
} from './actionTypes'

export const toggleSelect = (photoId) => {
  return {
    type: TOGGLE_SELECT,
    photoId
  }
}

export const deletePhotos = (photoIds) => {
  return {
    type: DELETE_PHOTOS,
    photoIds
  }
}
