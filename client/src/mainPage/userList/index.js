/* eslint-disable react/jsx-filename-extension */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import Groups from './components/groups';
import Groups2 from './components/groups2';
import styles from './index.css';

function UserList({ handleChannelClick, username, user_id }) {
  return (
    <div
      className={styles.userListContainer}
    >
      <Groups user_id={user_id} handleChannelClick={handleChannelClick} />
      <Groups2 username={username} user_id={user_id} handleChannelClick={handleChannelClick} />
    </div>
  );
}

UserList.propTypes = {
  handleChannelClick: PropTypes.func,
  username: PropTypes.string,
  user_id: PropTypes.number,
};

UserList.defaultProps = {
  handleChannelClick: null,
  username: 'Avery',
  user_id: 2,
};

export default UserList;
