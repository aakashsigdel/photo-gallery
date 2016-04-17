'use strict'

import {
  DELETE_PHOTOS,
  TOGGLE_PERMISSION,
  TOGGLE_SELECT,
  CLEAR_CHANGE
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

export const togglePermission = () => {
  return {
    type: TOGGLE_PERMISSION
  }
}

export const clearChange = () => {
  return {
    type: CLEAR_CHANGE
  }
}
