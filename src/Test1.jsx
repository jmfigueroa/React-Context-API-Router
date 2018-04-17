import React from 'react'
import { Redirect, Link } from './RouterComponents'
//
export const Test1 = props => (
  <div>
    <h1>Path: {props.path}</h1>
    <button onClick={props.toggle}>Redirect</button>
    {props.change ? <Redirect path="/error" /> : ''}
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
    <Link path="/worsethings">worsethings</Link>
  </div>    
)
