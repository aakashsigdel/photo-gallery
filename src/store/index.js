import {
  createStore,
  compose
} from 'redux'
import rootReducer from '../reducers'

const configureStore = (initialState) => {
  const enhancer = compose(
    window.devToolsExtension ? window.devToolsExtension() : undefined
  )
  return createStore(rootReducer, initialState, enhancer)
}

export default configureStore
