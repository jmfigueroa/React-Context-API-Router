//export both Routing Provider and Routing Consumer
import React from 'react'
// import history from 'history'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

// Create Context
const Context = React.createContext()
const { Provider } = Context
// Export Provider
export class RoutingProvider extends React.Component {
  //get current location
  state = { url: history.location.pathname, contents: {} }

  action = {
    go: url =>
      this.setState(state => ({ ...state.url, url }), () => history.push(url))
  }
  //
  render() {
    return (
      <Provider value={{ state: this.state, action: this.action }}>
        {this.props.children}
      </Provider>
    )
  }
}
// Export Consumer
const { Consumer } = Context
export const RoutingConsumer = Consumer
