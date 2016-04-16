'use strict'

import {
  SET_SELECT,
  SET_UNSELECT,
  DELETE_PHOTOS
} from './actionTypes'

export const setSelect = (photoId) => {
  return {
    type: SET_SELECT,
    photoId
  }
}

export const setUnselect = (photoId) => {
  return {
    type: SET_UNSELECT,
    photoId
  }
}

export const deletePhotos = (photoIds) => {
  return {
    type: DELETE_PHOTOS,
    photoIds
  }
}
