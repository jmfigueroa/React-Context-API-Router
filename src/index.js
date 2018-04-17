import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { RoutingProvider } from './RouterComponents'

ReactDOM.render(
  <RoutingProvider>
    <App />
  </RoutingProvider>,
  document.getElementById('root')
)
