/* eslint-disable camelcase */
import React from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';
import styles from './mainApp.css';
import SearchModule from './search/index.js';
import TaskListModule from './taskList/index.js';
import Message from './message/index.js';
import UserList from './userList/index.js';
import LogoutButton from '../login/logoutButton.jsx';
import { io } from 'socket.io-client';

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: 2,
      channel_id: 1,
      user_name: '',
      messages: [],
      taskList: [],
    };
    this.socket = io({
      extraHeaders: {
        'my-custom-header': this.state.channel_id,
      },
    });
    this.handleChannelClick = this.handleChannelClick.bind(this);

    this.getMessages = this.getMessages.bind(this);
    this.getTasks = this.getTasks.bind(this);

    this.getChatHistory = this.getChatHistory.bind(this);
    this.getAllTasks = this.getAllTasks.bind(this);
    this.addTask = this.addTask.bind(this);
  }

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
    this.socket.on('message', (data) => {
      console.log(data.message[0])
      this.setState({ messages: [...this.state.messages, data.message[0]] });
    });
    this.getChatHistory();
    this.getAllTasks();
  }

  handleChannelClick(channelID) {
    this.setState({
      channel_id: channelID,
    });
    this.getChatHistory();
  }

  getChatHistory() {
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

  getMessages(list) {
    this.setState({ messages: list });
  }

  getAllTasks() {
    const { user_id } = this.state;
    axios.get(`/tasks?user_id=${user_id}`)
      .then((resp) => {
        this.setState({
          taskList: [...resp.data],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addTask(textBody) {
    const { user_id } = this.state;
    const data = {
      user_id,
      task_text: textBody,
    };
    axios.post('/task', data)
      .then((resp) => {
        this.getAllTasks();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getTasks(tasks) {
    this.setState({ taskList: tasks });
  }

  render() {
    const {
      user_id, channel_id, user_name, taskList,
    } = this.state;
    const { picture } = this.props;
    return (
      <div className={styles.parent}>
        <div className={styles.div4}>
          <LogoutButton />
          <SearchModule
            name={user_name}
            avatar={picture}
            channel_id={channel_id}
            user_id={user_id}
            getMessages={this.getMessages}
            getTasks={this.getTasks}
          />
        </div>
        <div className={styles.div1}>
          <UserList
            handleChannelClick={this.handleChannelClick}
            user_id={user_id}
            username={user_name}
            channel_id={channel_id}
          />
        </div>
        <div className={styles.div2}>
          <Message
            getAllTasks={this.getAllTasks}
            messages={this.state.messages}
            userName={this.state.user_name}
            channel_id={this.state.channel_id}
            user_id={this.state.user_id}
            socket={this.socket}
          />
        </div>
        <div className={styles.div3}>
          <TaskListModule
            tasks={taskList}
            user_id={user_id}
            getAllTasks={this.getAllTasks}
            addTask={this.addTask}
          />
        </div>
      </div>
    );
  }
}

export default MainApp;
