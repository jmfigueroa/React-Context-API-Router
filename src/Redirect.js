//authRedirect controls the flow. 
//It is NOT the same thing as an isAuthenticated flag. 
//You should still maintain an isAuthenticated flag in your application
import React from 'react'
//
import { RoutingConsumer } from './'
//
export class Redirect extends React.Component {
  render() {
    return (
      <RoutingConsumer>
        {({ state, action }) => {
          const reAuth = () =>
            //redirect reenables authenticated
            this.props.authRedirect ? this.props.authRedirect === false : ''
          const { path } = this.props
          const redirect = () => action.go(path)
          if (this.props.protectedRoute) {
            reAuth() && redirect(path)
          } else {
            redirect(path)
          }
        }}
      </RoutingConsumer>
    )
  }
}
