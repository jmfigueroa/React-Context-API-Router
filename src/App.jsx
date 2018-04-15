import React from 'react'
//
import {
  CustomRoute,
  ProtectedRoute,
  Redirect,
  Route,
  Link
} from './RouterComponents'
//
export class App extends React.Component {
  render() {
    return (
      <div>
        <CustomRoute />
        <ProtectedRoute />
        <Redirect />
        <Route />
        <Link />
      </div>
    )
  }
}
