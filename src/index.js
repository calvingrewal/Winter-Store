import React from 'react'
import { render } from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

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

render(<App />, document.getElementById('app'))
