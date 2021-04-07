import React from 'react';
import Users from './components/users.js';
import Groups from './components/groups.js';
import styles from './index.css';

class UserList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { handleUserClick, handleChannelClick, user_id } = this.props;
    return (
      <div
      className={styles.userListContainer}
      >
        <Groups user_id={user_id} handleChannelClick={handleChannelClick}/>
        <Users handleUserClick={handleUserClick}/>
      </div>
    )
  }
}

export default UserList;
