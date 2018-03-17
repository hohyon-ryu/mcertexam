import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import Question from "./question";
import Intro from "./intro";
import {connect} from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        { this.props.currentMenu === "Intro" ? <Intro /> : null }
        { this.props.currentMenu === "Question" ? <Question /> : null }
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    currentMenu: state.question.currentMenu
  }
}

export default connect(mapStateToProps, {})(App)
