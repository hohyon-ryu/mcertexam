import React from 'react'
import {Link} from 'react-router-dom'

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <h3>잘못된 주소 입니다.</h3>
          <p>쩝</p>
        </div>

        <div className="App-main">
          <Link to="/" className="main-button btn btn-danger">홈페이지로...
          </Link>
        </div>
      </div>
    )
  }
}

export default NotFound
