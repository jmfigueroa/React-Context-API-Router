import React from 'react'
//
import { Route, Link } from './RouterComponents'
//
import { Test1 } from './Test1'
import { Test2 } from './Test2'
export class App extends React.Component {
  render() {
    return (
      <div>
      <header>
      <Link path="/">Test1</Link>
      <Link path="/test">Test2</Link>
      </header>
        <Route path="/" component={Test1} />
        <Route path="/test" component={Test2} />
      </div>
    )
  }
}
