import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers/rootReducer'

import App from './Components/App/App.jsx'

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  composeWithDevTools (
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
)

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'))
