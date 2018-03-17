import React from 'react'
import {Link} from 'react-router-dom'

class Intro extends React.Component {
  render() {
    return (
      <div className="Intro">
        <div className="App-header">
          <h2>결혼 자격 시험</h2>
        </div>
        <p className="App-intro">
          이미 결혼해서 많은 것들을 겪은 선배들이 만들어가는 결혼 자격 시험.<br/>
          결혼을 하면 부부는 최고의 파트너이자 한 배를 탄 식구입니다.<br/>
          부부가 만들어내는 시너지를 극대화 하면 엄청난 일들이 생깁니다.<br/><br/>
          총 20 문제가 주어집니다.
        </p>

        <Link to="/question" className="main-button start btn btn-primary">시험 시작하기
        </Link>
        <br /><br />
        <Link to="/workshop" className="main-button btn btn-secondary">문제 제안 및 참여하기
        </Link>
      </div>
    )
  }
}

export default Intro
