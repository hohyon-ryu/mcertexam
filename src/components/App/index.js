import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import Intro from "./intro";
import NotFound from "./not_found";
import Question from "./question";
import {connect} from 'react-redux'
import {Route, Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Intro}/>
          <Route path="/question" component={Question}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  };
}


const mapStateToProps = (state) => {
  console.log("index state")
  console.log(state)
  return {
    questions: state.questions,
    routing: state.routing
  }
}

export default connect(mapStateToProps, {})(App)
