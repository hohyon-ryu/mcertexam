import React from 'react'
import Intro from "./App/intro";
import Question from "./App/question";
import { Route, Switch, NotFound } from 'react-router-dom'

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route path="/question" component={Question} />
        <Route component={ Question } />
      </Switch>
    )
  }
}


export default Routes