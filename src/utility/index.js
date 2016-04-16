'use strict'
import _ from 'lodash'

export const photosList = _.map(_.range(0, 20), function (num) {
  return {
    fileUrl: 'http://loremflickr.com/640/480?random=' + num
  }
})

export const hydratePhotosDataWithAditionalProperites = (arr) => {
  return arr.reduce((prevValue, currValue, index) => {
    prevValue[index] = currValue
    prevValue[index].photoId = index
    prevValue[index].selected = false
    return prevValue
  }, {})
}
