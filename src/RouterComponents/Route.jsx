import React from 'react'
import pathToRegexp from 'path-to-regexp'

import { RoutingConsumer } from './'

export class Route extends React.Component {
  render() {
    return (
      <RoutingConsumer>
        {({ state }) => {
          const re = pathToRegexp(this.props.path)
          const RenderedComponent = this.props.component
          if (re.test(state.url)) return <RenderedComponent />
        }}
      </RoutingConsumer>
    )
  }
}
