import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './global-styles/index.css'
import './global-styles/variables.css'

ReactDOM.render(<App />, document.getElementById('app'))

module.hot.accept()
