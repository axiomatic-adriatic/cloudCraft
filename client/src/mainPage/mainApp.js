import React from 'react';
import axios from 'axios';
import styles from './mainApp.css';
import SearchModule from './search/index.js'
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


  handleUserClick(userID) {
    let channelID = [];
    axios.get('/userChannel', {
      params: {
        user_id: userID
      }
    })
      .then((response) => {
        this.setState({
          channel_id: response.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleChannelClick(channelID) {
    this.setState({
      channel_id: channelID
    })
  }

  render() {
    const { user_id, channel_id } = this.state;
    return (
      <div>
        <div className={styles.parent}>
          <div className={styles.div4}>
            <SearchModule />
          </div>
          <div className={styles.div1}>
            <UserList
              handleUserClick={this.handleUserClick}
              handleChannelClick={this.handleChannelClick}
              user_id={user_id}
              channel_id={channel_id} />
          </div>
          <div className={styles.div2}>
            <Message
              channel_id={channel_id} user_id={user_id} />
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
