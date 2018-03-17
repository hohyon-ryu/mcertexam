import React, {Component} from 'react'

// Firebase
import {init as firebaseInit} from 'javascripts/firebase'

import {browserHistory} from 'react-router'
import Routes from './routes'


// Redux
import {Provider} from 'react-redux'
import configureStore from './configureStore'

class Root extends Component {
  constructor(props) {
    super(props);
    firebaseInit();
    this.store = configureStore();
  }

  render() {
    return (
      <Provider store={this.store}>
        <Routes history={browserHistory}/>
      </Provider>
    )
  }
}
export default Root
