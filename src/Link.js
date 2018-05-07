import React from 'react'
import { RoutingConsumer } from './'
//
export const Link = ({ path, component, ...props }) => {
  return (
    <RoutingConsumer>
      {({ action }) => (
        <a {...props} onClick={() => action.go(path)}>
          {/* empty content to avoid es-lint error */}
        </a>
      )}
    </RoutingConsumer>
  )
}
