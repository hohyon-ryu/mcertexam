import React, {Component} from 'react'

// Firebase
import {init as firebaseInit} from 'javascripts/firebase'

import App from '../components/App'
import { ConnectedRouter } from 'react-router-redux'


// Redux
import {Provider} from 'react-redux'
import store, { history } from '../store'

class Root extends Component {
  constructor(props) {
    super(props);
    firebaseInit();
  }

  render() {
    console.log("root state")
    console.log(store.getState())

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    )
  }
}
export default Root
