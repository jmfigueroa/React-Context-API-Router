//export both Routing Provider and Routing Consumer
import React from 'react'
import history from 'browser-history'
// Create Context
const Context = React.createContext()
const { Provider } = Context
// Export Provider
export class RoutingProvider extends React.Component {
  //get current location
  state = { url: window.location.pathname }

  action = {
    go: url => this.setState(state => ({ ...state, url }), () => history(url))
  }
  //
  componentDidMount() {
    history((e, url) => this.setState(state => ({ ...state, url })))
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
