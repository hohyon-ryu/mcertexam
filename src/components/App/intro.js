import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from "react-redux";

class Intro extends React.Component {
  render() {
    return (
      <div className="Intro">
        <div className="App-header">
          <h2>결혼 자격 시험</h2>
        </div>
        <div className="App-main">
          많은 부부를 상담했던 미국의 심리학자이자 정신과 의사인 Chris Thurman은 결혼 자격 시험의 필요성을 역설하였습니다.
          <br/>
          결혼이라는 것이 정말 어려운 소통의 과정임에도 일단 결혼을 하고 나면 자연스럽게 좋은 부부가 될 수 있다고 착각하고 있다는 것입니다.
          <br/>
          Thurman 박사의 아이디어를 빌려 결혼 전에 꼭 알았으면 좋을 법한 문제들을 묶어보았습니다.
          <br/><br/>
          총 20 문제가 주어집니다.
        </div>

        <Link to="/question" className="main-button start btn btn-primary">시험 시작하기
        </Link>
        <br /><br />
        {/*<Link to="/workshop" className="main-button btn btn-secondary">문제 제안 및 참여하기*/}
        {/*</Link>*/}
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   console.log("intro state")
//   console.log(state)
//   return {
//     questions: state.questions,
//     routing: state.routing
//   }
// }

export default connect()(Intro)
