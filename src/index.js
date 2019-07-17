import React from 'react'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import "antd/dist/antd.css"
import './index.css'
import App from './App'
import rootReducer from './reducers'

const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(rootReducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))
