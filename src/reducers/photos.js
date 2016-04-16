'use strict'

import {
  hydratePhotosDataWithAditionalProperites,
  photosList
} from '../utility'
import {
  TOGGLE_SELECT,
  DELETE_PHOTOS
} from '../actions/actionTypes'

const initialState = {
  data: {
    ...hydratePhotosDataWithAditionalProperites(photosList)
  },
  changed: false,
  selectCount: 0
}

const photos = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SELECT:
      return {
        ...state,
        selectCount: state.data[action.photoId].selected ? state.selectCount - 1 : state.selectCount + 1,
        data: {
          ...state.data,
          [action.photoId] : {
            ...state.data[action.photoId],
            selected: !state.data[action.photoId].selected,
          }
        }
      }
    case DELETE_PHOTOS:
      let tempState = JSON.parse(JSON.stringify(state))
      action.photoIds.map((photoId, index) => {
        delete tempState.data[photoId]
      })
      return tempState
    default:
      return state
  }
}

export default photos
