import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store'
import Application from './Containers'

const _initilizeAppWithProvider = () => {
  return (
    <Provider store={configureStore()}>
      <Application />
    </Provider>
  )
}

render(
  _initilizeAppWithProvider(),
  document.getElementById('root')
);
