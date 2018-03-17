import React from 'react'
import {connect} from 'react-redux'
import {changeMenu} from "../../actions";

class Intro extends React.Component {
  constructor(props) {
    super(props);
  }

  startExam = (e) => {
    e.preventDefault();
    this.props.changeMenu("Question");
  };

  render() {
    return (
      <div className="Intro">
        <div className="App-header">
          <h2>결혼 자격 시험</h2>
        </div>
        <p className="App-intro">
          결혼 전 미리 알았었으면 좋았을 이야기들을 담았습니다.<br/>
          결혼 후의 세상은 상상했던 것과는 너무도 달랐습니다.<br/>
          그리고 행복한 가정을 이루기가지 참 오랜 시간과 노력이 들었습니다.<br/><br/>
          총 25 문제가 주어집니다.
        </p>

        <button type="button" className="btn btn-primary"
                onClick={this.startExam}>시험 시작하기
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentMenu: state.currentMenu
  }
}

export default connect(mapStateToProps, {changeMenu})(Intro)
