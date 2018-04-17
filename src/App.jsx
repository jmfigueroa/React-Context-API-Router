import React from 'react'
//
import { Route, Link } from './RouterComponents'
//
import { Test1, Test2, Error } from './Test1'
export class App extends React.Component {
  constructor() {
    super()
    this.state = { changeMe: false }
  }
  toggle = ()=>{this.setState({changeMe: !this.state.change})}
  render() {
    return (
      <div>
        <header>
          <Link path="/">Test1</Link>
          <Link path="/test">Test2</Link>
        </header>
        <Route path="/" component={Test1} toggle={this.toggle} change={this.state.changeMe}/>
        <Route path="/test" component={Test2} />
        <Route path="/error" component={Error}/>
      </div>
    )
  }
}
