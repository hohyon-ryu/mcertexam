import React from 'react'
import {connect} from 'react-redux'
import {loadQuestions} from '../../actions'

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.props.loadQuestions(20)
  }

  render() {
    console.log("question view this.props");
    console.log(this.props);
    console.log(this.props.questions);
    if (this.props.questions == null) {
      return (
        <div className="Intro">
          <div className="App-header">
            <p>문제를 불러오고 있습니다.</p>
          </div>
        </div>
      )
    }
    let question = this.props.questions[this.props.question_no - 1]
    return (
      <div className="Intro">
        <div className="App-header">
          <p>문제 {this.props.question_no}/20</p>
          <p>{question.question}</p>
        </div>
        <form>
          <ul>
          </ul>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("state")
  console.log(state)
  return {
    question_no: state.questions.question_no,
    questions: state.questions.question_list,
  };
};

export default connect(mapStateToProps, {loadQuestions})(Question)
