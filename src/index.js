import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'
import './global-styles/index.css'
import './global-styles/variables.css'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app'),
)

module.hot.accept()
