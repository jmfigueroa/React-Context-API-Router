import React from 'react'
//
import { RoutingConsumer } from './'
//
export class Redirect extends React.Component {
  render() {
    return (
      <RoutingConsumer>
        {({ state, action }) => {
            const {path} = this.props
            const redirect = ()=> action.go(path)
            redirect(path)
        }}
      </RoutingConsumer>
    )
  }
}

//
export const Ldink = ({ path, component, ...props }) => {
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
