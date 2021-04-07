import React from 'react';
import axios from 'axios';
import styles from './styles.css';

class Groups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allChannels: [],
      groupChannels: [],
      directChannels: [],
      channelUsers: []
    }
    this.getAllChannels = this.getAllChannels.bind(this);
    // this.getChannelUsers = this.getChannelUsers.bind(this);
  }

  getAllChannels() {
    const { user_id } = this.props;
    axios.get('/channels', {
      params: {
        userLoggedIn: user_id
      }
    })
    .then((response) => {
     const channelData = response.data;
     const channels = [];

     for (var i = 0; i < channelData.length; i++) {
       channels.push(channelData[i].channel_id);
     }
     this.setState({
       allChannels: channels
     });
    })
    .catch((error) => {
      console.log(error);
    })
  }

  // getChannelUsers() {
  //   const { allChannels } = this.state;
  //   for (var i = 0; i < allChannels.length; i++) {
  //     let currentChannel = allChannels[i];
  //     axios.get('/channelUsers', {
  //       params: {
  //         channel: currentChannel
  //       }
  //     })
  //     .then((success) => {
  //       this.setState({
  //         channelUsers: success
  //       })
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //   }
  // }

  componentDidMount() {
    this.getAllChannels();
    this.getChannelUsers();
  }

  render() {
    console.log('state in groups:', this.state);
    const { allChannels } = this.state;
    const { handleChannelClick } = this.props;
    const channelList = allChannels.map((channel) => {
      return (
      <div key={channel
      } className={styles.select}>
      <p
      onClick={() => handleChannelClick(channel)}># Channel {channel}</p>
      </div>
      )
    })
    return (
      <div
      className="channels-container"
      >
        <h3>Channels</h3>
        {channelList}
      </div>
    )
  }
}

export default Groups;
