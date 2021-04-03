import React from 'react';
import Users from './components/users.js';
import Groups from './components/groups.js';

class UserList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>User List</h1>
        <Groups />
        <Users />
      </div>
    )
  }
}

export default UserList;
