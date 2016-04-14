import {
  createStore,
  compose
} from 'redux'
import devTools from 'remote-redux-devtools'
import rootReducer from '../reducers'

const configureStore = (initialState) => {
  const enhancer = compose(
    devTools()
  )
  return createStore(rootReducer, initialState, enhancer)
}

export default configureStore
