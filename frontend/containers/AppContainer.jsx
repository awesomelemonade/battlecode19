import React from 'react'
import { connect } from 'react-redux'

import {fetchUsers} from '../actions/users'
import {serverMessage} from '../reducers/users'

class AppContainer extends React.Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    const userList = (
      <ul>
        {this.props.users.map(user => (
          <li>Contact {user.first_name} {user.last_name} at {user.email}.</li>
        ))}
      </ul>
    )

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>Sample App!</h1>
            <p>{this.props.placeholder}</p>
            {userList}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => serverMessage(state),
  { fetchUsers: fetchUsers }
)(AppContainer);