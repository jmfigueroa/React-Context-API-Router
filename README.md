# React Context Router

Simple Implementation of a Context-API-compatible router

🚧EXPERIMENTAL: This Router is currently under development! Help is appreciated 🚧

## Components:

*<Redirect />*

Uses the following props:

- `props.authRedirect` controls the flow. It is NOT the same thing as an isAuthenticated flag. You should still maintain an isAuthenticated flag in your application
- `props.protectedRoute` signals the redirect component to enable/disable use of `props.authRedirect`

*<ProtectedRoute/>

Requires:

- `props.errorPath`
- `props.authRedirect`

## Usage:

Sample implementation:

_index.js_

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { RoutingProvider } from './RouterComponents'

ReactDOM.render(
  <RoutingProvider>
    <App />
  </RoutingProvider>,
  document.getElementById('root')
```

_App.jsx_

```javascript
import React from 'react'
//
import { Route, Link } from './RouterComponents'
//
import { Test1, Test2, Error } from './Test1'
export class App extends React.Component {
  constructor() {
    super()
    this.state = { fakeError: false }
  }
  toggle = () => {
    this.setState({ fakeError: !this.state.fakeError })
  }
  render() {
    return (
      <div>
        <header>
          <Link path="/">Test1</Link>
          <Link path="/test">Test2</Link>
        </header>
        <Route
          path="/"
          component={Test1}
          toggle={this.toggle}
          fauxError={this.state.fakeError}
        />
        <Route path="/test" component={Test2} />
        <Route
          path="/error"
          component={Error}
          toggle={this.toggle}
          fauxError={this.state.fakeError}
        />
      </div>
    )
  }
}
```

_Test Routes_

```javascript
import React from 'react'
import { Redirect, Link } from './RouterComponents'
//
export const Test1 = props => (
  <div>
    <h1>Path: {props.path}</h1>
    <h1>Path: {props.fauxError}</h1>
    <button onClick={props.toggle}>Redirect</button>
    {props.fauxError ? <Redirect path="/error" /> : ''}
  </div>
)
//
export const Test2 = props => (
  <div>
    <h2>Path: {props.path}</h2>
  </div>
)

export const Error = props => (
  <div>
    <h1>Path: {props.path}</h1>
    <h1>404</h1>
    <button onClick={props.toggle}>
      <Link path="/">Go Home</Link>
    </button>
    {console.log(props.fauxError)}
  </div>
)
```

---

## To Do:

* URL Params
* Nested Routes?


### Credits:

Inspired by [Steven Koch](https://medium.com/@stevenkoch/how-to-build-your-own-react-router-with-new-react-context-api-1647406b9b93)
