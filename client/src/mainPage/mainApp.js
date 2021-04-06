import React from 'react';
import axios from 'axios';
// import props from 'prop-types';
import styles from './mainApp.css';
import TaskListModule from './taskList/index.js';
import Message from './message/index.js';
import UserList from './userList/index.js';

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: 2,
      channel_id: 1,
    };
    this.handleUserClick = this.handleUserClick.bind(this);
    this.handleChannelClick = this.handleChannelClick.bind(this);
  }

  componentDidMount() {
    // this.setState({
    //   user_id: 2,
    //   channel_id: 1,
    // });
    axios.get(`/userInfo?email=${this.props.email}`)
      .then((results) => {
        console.log(results.data.user_id)
        this.setState({
          user_id: results.data.user_id || 2,
        });
      })
      .catch((err) => {
        console.log('user get request err', err);
      });
  }

  handleUserClick(userID) {
    this.setState({
      user_id: userID,
    });
  }

  handleChannelClick(channelID) {
    this.setState({
      channel_id: channelID,
    });
  }

  render() {
    const { user_id, channel_id } = this.state;
    return (
      <div>
        <div className={styles.parent}>
          <div className={styles.div4}>
            <h1>Search Bar</h1>
          </div>
          <div className={styles.div1}>
            <UserList
              handleUserClick={this.handleUserClick}
              handleChannelClick={this.handleChannelClick}
              user_id={user_id}
              channel_id={channel_id}
            />
          </div>
          <div className={styles.div2}>
            <Message
              channel_id={channel_id}
              user_id={user_id}
            />
          </div>
          <div className={styles.div3}>
            <TaskListModule user_id={user_id} />
          </div>
        </div>
      </div>
    );
  }
}

export default MainApp;
