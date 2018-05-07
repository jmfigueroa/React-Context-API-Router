import React from 'react'
//
import { Route, Link, ProtectedRoute } from './RouterComponents'
//
import { Test1, Test2, Error } from './Test'
export class App extends React.Component {
  constructor() {
    super()
    this.state = { fakeError: false, authRedirect: false }
  }
  toggleError = () => {
    this.setState({ fakeError: !this.state.fakeError })
  }
  toggleAuth = () =>
    this.setState({ authRedirect: !this.state.authRedirect })
  render() {
    return (
      <div>
        <header>
          <Link path="/">Test1</Link>
          <Link path="/protected_route">Test2</Link>
        </header>
        <Route
          path="/"
          component={Test1}
          toggleError={this.toggleError}
          toggleAuth={this.toggleAuth}
          fakeError={this.state.fakeError}
          authRedirect={this.state.authRedirect}
        />
        <ProtectedRoute
          path="/protected_route"
          component={Test2}
          toggleError={this.toggleError}
          toggleAuth={this.toggleAuth}
          authRedirect={this.state.authRedirect}
          fakeError={this.state.fakeError}
          errorPath='/error'
        />
        <Route
          path="/error"
          component={Error}
          toggleError={this.toggleError}
          toggleAuth={this.toggleAuth}
          fakeError={this.state.fakeError}
        />
      </div>
    )
  }
}
