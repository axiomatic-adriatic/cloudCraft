import React from 'react';
import axios from 'axios';
import { YaleBlue, AliceBlue } from '../styles/colors';
import faker from 'faker';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
    this.getUsers = this.getUsers.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getUsers() {
    axios.get('/users')
    .then((response) => {
      const users = response.data;
      this.setState({
        users: users
      })
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  handleClick(userId) {
    console.log('user clicked', { userId });
    //
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const { users } = this.state;
    const avatarStyle = {
      verticalAlign: 'middle',
      width: '35px',
      height: '35px',
      borderRadius: '15%',
      marginLeft: '15px',
    };

    const userList = users.map((user) => {
      // if (user.user_id === login.user_id) {
      //   return '';
      // }
      const imageSrc= faker.image.avatar();

      return (
      <div
          className="user-container"
          style={{
            display: 'flex',
            padding: '3px'
          }}
          key={user.user_id}
        >
        <img src={imageSrc} style={avatarStyle} />
        <p
          onClick={() => this.handleClick(user.user_id)}
          style={{ fontSize: '14px', marginLeft: '25px'}}
        >
          {user.name}
        </p>
      </div>
      );
    })
    return (
      <div
        className="userList"
        style={{
          marginLeft: '15px'
        }}
      >
        <h3>Direct Messages</h3>
        {userList}
      </div>
    )
  }
}

export default Users;
