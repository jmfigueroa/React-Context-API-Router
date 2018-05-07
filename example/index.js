import React from 'react'
import {render}from 'react-dom'
import { App } from './App'
//
import { RoutingProvider } from './RouterComponents'

render(
  <RoutingProvider>
    <App />
  </RoutingProvider>,
  document.getElementById('root')
)
