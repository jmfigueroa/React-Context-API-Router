import React from 'react'
import pathToRegexp from 'path-to-regexp'

import { RoutingConsumer } from './'

export const Route = props => (
  <RoutingConsumer>
    {({ state }) => {
        console.log(props.change)
      const regexTestForComponent = pathToRegexp(props.path)
      const RenderedComponent = props.component
      if (regexTestForComponent.test(state.url))
        return <RenderedComponent {...props} />
    }}
  </RoutingConsumer>
)
