'use strict'

import {
  hydratePhotosDataWithAditionalProperites,
  photosList
} from '../utility'
import {
  DELETE_PHOTOS,
  TOGGLE_PERMISSION,
  TOGGLE_SELECT,
  CLEAR_CHANGE
} from '../actions/actionTypes'

const initialState = {
  data: {
    ...hydratePhotosDataWithAditionalProperites(photosList)
  },
  changed: false,
  selectCount: 0,
  permission: false
}

const photos = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SELECT:
      return {
        ...state,
        // increment or decrement selectCount when selection is toggled
        selectCount: state.data[action.photoId].selected
          ? state.selectCount - 1
          : state.selectCount + 1,
        data: {
          ...state.data,
          [action.photoId]: {
            ...state.data[action.photoId],
            selected: !state.data[action.photoId].selected
          }
        }
      }
    case TOGGLE_PERMISSION:
      return {
        ...state,
        permission: !state.permission
      }
    case CLEAR_CHANGE:
      return {
        ...state,
        changed: false
      }
    case DELETE_PHOTOS: {
      let tempState = JSON.parse(JSON.stringify(state))
      action.photoIds.map((photoId) => {
        // decrease selectCount if item being delted is selected
        if (tempState.data[photoId].selected) {
          --tempState.selectCount
        }
        delete tempState.data[photoId]
      })

      tempState.changed = true
      return tempState
    }
    default:
      return state
  }
}

export default photos
