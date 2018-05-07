import React from 'react'
import { Redirect, Link } from './RouterComponents'
//
export const Test1 = props => (
  <div>
    <h1>Home: {props.path}</h1>
    <p>{props.authRedirect ? 'Not Authenticated' : 'Authenticated!!!'}</p>
    <button onClick={props.toggleError}>Simulate Error</button>
    {props.fakeError ? <Redirect path="/error" /> : ''}
    <button onClick={props.toggleAuth}>AUTH</button>
  </div>
)
//
export const Test2 = props => (
  <div>
    <h2>Route Needing Auth: {props.path}</h2>
    <button onClick={props.toggleError}>Simulate Error</button>
    {props.fakeError ? <Redirect path="/error" /> : ''}
    <button onClick={props.toggleAuth}>AUTH</button>
  </div>
)

export const Error = props => (
  <div>
    <h1>Path: {props.path}</h1>
    <h1>404</h1>
    <button onClick={props.toggleError}>
      <Link path="/">Return Home</Link>
    </button>
    {console.log(props.fakeError)}
  </div>
)
