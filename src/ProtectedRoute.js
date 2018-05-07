import React from 'react'

import { Redirect, Route } from './'

export class ProtectedRoute extends React.Component {
  render() {
    return this.props.authRedirect ? (
      <Redirect path={this.props.errorPath} protectedRoute={true} />
    ) : (
      <Route {...this.props} />
    )
  }
}
