import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom'
import AppRoot from './root'

function renderApp() {
  ReactDOM.render(React.createElement(AppRoot), document.getElementById('root'))
}

renderApp()
