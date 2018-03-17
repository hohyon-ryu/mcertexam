import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import Intro from "./intro";
import NotFound from "./not_found";
import Question from "./question";
import {Route, Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Switch className="App">
        <Route exact path="/" component={Intro} />
        <Route path="/question" component={Question} />
        <Route component={NotFound} />
      </Switch>
    );
  };
}

export default App
