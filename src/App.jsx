import React from 'react'
//
import { Route } from './RouterComponents'
//
import { Test1 } from './Test1'
import { Test2 } from './Test2'
export class App extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" component={Test1} />
        <Route path="/test" component={Test2} />
      </div>
    )
  }
}
