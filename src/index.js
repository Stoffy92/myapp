import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
// import { Router } from 'react-router';
import createHashHistory from 'history/createHashHistory';
import { BrowserRouter, browserHistory } from 'react-router-dom';


const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

ReactDOM.render(
  <BrowserRouter history={browserHistory}>
    <App />
  </BrowserRouter>, 
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
