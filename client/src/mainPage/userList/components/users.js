import React from 'react';
import axios from 'axios';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
    this.getUsers = this.getUsers.bind(this);
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

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const { users } = this.state;
    const userList = users.map((user) => {
      return <li key={user.user_id}>{user.name}</li>;
    })
    return (
      <div>
        <h3>Users</h3>
        <ul>
          {userList}
        </ul>
      </div>
    )
  }
}

export default Users;
