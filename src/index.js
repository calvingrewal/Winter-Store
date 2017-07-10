import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Router, Route, IndexRedirect, hashHistory } from 'react-router'

import rootReducer from './reducers/rootReducer'

import App from './components/App/App.jsx'
import Products from './components/Products/Products.jsx'
import Cart from './Components/Cart/Cart.jsx'
import CartItem from './Components/CartItem/CartItem.jsx'

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
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRedirect to='/products'/>
        <Route path='products' component={Products}/>
        <Route path='cart' component={Cart} />
      </Route>
    </Router>
  </Provider>, document.getElementById('app')
)
