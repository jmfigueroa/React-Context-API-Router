import React from 'react'
import { RoutingConsumer } from './'
//
export const Link = ({ path, ...props }) => {
  return (
    <RoutingConsumer>
      {({ action }) => (
        <a
          {...props}
          onClick={() => {
            action.go(path)
          }}
        >
          {/* empty content to avoid es-lint error */}
        </a>
      )}
    </RoutingConsumer>
  )
}
