import React from 'react';
import Users from './components/users.js';
import Groups from './components/groups.js';

class UserList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div
      className="userList-container"
      style={{
        backgroundColor: '#6096BA',
        color: '#E7ECEF',
        textAlign: 'center',
       }
      }
      >
        <h1>User List</h1>
        <Groups />
        <Users />
      </div>
    )
  }
}

export default UserList;
