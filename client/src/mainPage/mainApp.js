/* eslint-disable camelcase */
import React from 'react';
import axios from 'axios';
import styles from './mainApp.css';
import SearchModule from './search/index.js';
import TaskListModule from './taskList/index.js';
import Message from './message/index.js';
import UserList from './userList/index.js';

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: 2,
      channel_id: 1,
      user_name: '',
      messages: [],
    };
    this.handleUserClick = this.handleUserClick.bind(this);
    this.handleChannelClick = this.handleChannelClick.bind(this);
    this.getMessages = this.getMessages.bind(this);
  }

  // handleUserClick(userID) {
  //   this.setState({
  //     user_id: userID,
  //   });

  componentDidMount() {
    axios.get(`/userInfo?email=${this.props.email}`)
      .then((results) => {
        this.setState({
          user_id: results.data.user_id || 2,
          user_name: results.data.name || '',
        });
      })
      .catch((err) => {
        console.log('user get request err', err);
      });
    axios({
      method: 'get',
      url: '/chat',
      params: { channel_id: this.state.channel_id },
    })
      .then((result) => {
        const allMessages = result.data.filter((message) => message.is_delete === 0);
        this.setState({ messages: allMessages });
      })
      .catch((err) => { throw err; });
  }

  handleChannelClick(channelID) {
    this.setState({
      channel_id: channelID,
    });
  }

  handleUserClick(userID) {
    const channelID = [];
    axios.get('/userChannel', {
      params: {
        user_id: userID,
      },
    })
      .then((response) => {
        this.setState({
          channel_id: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getMessages(list) {
    this.setState({ messages: list });
  }

  render() {
    const { user_id, channel_id, user_name } = this.state;
    const { picture } = this.props;
    return (
      <div className={styles.parent}>
        <div className={styles.div4}>
          {/* <h3>{`${user_name}`}</h3> */}
          <SearchModule
            name={user_name}
            avatar={picture}
            channel_id={channel_id}
            user_id={user_id}
            getMessages={this.getMessages}
          />
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
            messages={this.state.messages}
            userName={user_name}
            channel_id={channel_id}
            user_id={user_id}
          />
        </div>
        <div className={styles.div3}>
          <TaskListModule user_id={user_id} />
        </div>
      </div>
    );
  }
}

export default MainApp;
