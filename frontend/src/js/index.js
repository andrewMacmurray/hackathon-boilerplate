import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'

import { Router, browserHistory } from 'react-router'
import reducers from './reducers/reducers_index.js'
import Routes from './routes.js'

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={Routes} />
  </Provider>,
  document.getElementById('app')
)
