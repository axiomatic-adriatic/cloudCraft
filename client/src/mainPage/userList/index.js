import React from 'react';
import Users from './components/users.js';
import Groups from './components/groups.js';

class UserList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { handleUserClick, handleChannelClick } = this.props;
    return (
      <div
      className="userList-container"
      style={{
        backgroundColor: '#6096BA',
        color: '#E7ECEF',
       }
      }
      >
        <Groups handleChannelClick={handleChannelClick}/>
        <Users handleUserClick={handleUserClick}/>
      </div>
    )
  }
}

export default UserList;
