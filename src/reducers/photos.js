import {
  hydratePhotosDataWithAditionalProperites,
  photosList
} from '../utility'
import {
  DELETE_PHOTOS,
  TOGGLE_PERMISSION,
  TOGGLE_SELECT,
  CLEAR_CHANGE,
  SET_ORDER,
  RESET_SELECT_COUNT
} from '../actions/actionTypes'

const data = hydratePhotosDataWithAditionalProperites(photosList)
const initialState = {
  data,
  changed: false,
  selectCount: 0,
  permission: false,
  orderArray: Object.keys(data)
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
    case SET_ORDER: {
      let tempOrderArray = [...state.orderArray]
      // rearranging elements in the order array
      tempOrderArray.splice(action.indexChange.newIndex, 0, tempOrderArray.splice(action.indexChange.oldIndex, 1)[0])
      return {
        ...state,
        orderArray: tempOrderArray
      }
    }
    case RESET_SELECT_COUNT: {
      let tempState = {...state}
      Object.keys(tempState.data).map((photoKey) => {
        if (tempState.data[photoKey].selected) {
          tempState.data[photoKey].selected = false
        }
      })
      tempState.selectCount = 0
      return tempState
    }
    case DELETE_PHOTOS: {
      let tempState = {...state}
      action.photoIds.map((photoId) => {
        // decrease selectCount if item being delted is selected
        if (tempState.data[photoId].selected) {
          --tempState.selectCount
        }
        delete tempState.data[photoId]
      })

      // remove the selected photos from ordered array
      let tempOrderArray = state.orderArray.filter(pid => !action.photoIds.some(id => id === Number(pid)))

      tempState.orderArray = tempOrderArray
      tempState.changed = true

      return tempState
    }
    default:
      return state
  }
}

export default photos
