import React from 'react';
import Users from './components/users.js';
import Groups from './components/groups.js';
import Groups2 from './components/groups2.js'
import styles from './index.css';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allChannels: [],
    };
  }

  render() {
    const { handleUserClick, handleChannelClick, username, user_id } = this.props;
    return (
      <div
        className={styles.userListContainer}
      >
        <Groups user_id={user_id} handleChannelClick={handleChannelClick} />
        <Groups2 username={username} user_id={user_id} handleChannelClick={handleChannelClick} />
      </div>
    );
  }
}

export default UserList;
