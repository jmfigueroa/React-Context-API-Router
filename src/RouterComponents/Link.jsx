import React from 'react'
import { RoutingConsumer } from './'
function buttonHtml(props) {
  return <button {...props} />
}
export const Link = ({ path, component, ...props }) => {
  const Bnt = component || buttonHtml
  return (
    <RoutingConsumer>
      {({ action }) => <Bnt {...props} onClick={() => action.go(path)} />}
    </RoutingConsumer>
  )
}
