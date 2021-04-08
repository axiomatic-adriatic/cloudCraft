import React from 'react';
import axios from 'axios';
import styles from './styles.css';
import Groups2 from './groups2.js';

class Groups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allChannels: [],
      directMessages: [],
      groupChannels: [],
    };
    this.getAllChannels = this.getAllChannels.bind(this);
    this.getChannelUsers = this.getChannelUsers.bind(this);
  }

  // eslint-disable-next-line react/sort-comp
  getAllChannels(userID) {
    axios.get('/channels', {
      params: {
        userLoggedIn: userID,
      }
    })
      .then((response) => {
        const channelData = response.data;
        const channels = [];
        for (let i = 0; i < channelData.length; i++) {
          channels.push(channelData[i].channel_id);
        }
        this.setState({
          allChannels: channels,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    const { user_id } = this.props;
    this.getAllChannels(user_id);
  }

  componentDidUpdate(prevProps) {
    const { user_id } = this.props;
    if (this.props.user_id !== prevProps.user_id) {
      this.getAllChannels(user_id);
    }
  }

  getChannelUsers() {
    const { allChannels } = this.state;

    let directMessageChannels = [];
    let groupMessageChannels = [];

    for (var i = 0; i < allChannels.length; i++) {
      let currentChannel = allChannels[i];
      axios.get('/channelUsers', {
        params: {
          channel: currentChannel
        }
      })
      .then((success) => {
        if (success.data.length === 2) {
          directMessageChannels.push(currentChannel);
        } else {
          groupMessageChannels.push(currentChannel);
        }
        console.log('group message channels:', groupMessageChannels);
        console.log('dms:', directMessageChannels);
      })
      .catch((error) => {
        console.log(error);
      });
    }
    this.setState({
      groupChannels: groupMessageChannels,
      directMessages: directMessageChannels
    })
  }

  render() {
    const { allChannels } = this.state;
    const { handleChannelClick } = this.props;

    return (
      <div
        className="channels-container"
      >
        <h3>Channels</h3>
        {allChannels.map((channel) => {
        return (
        <div key={channel} className={styles.select}>
          <p onClick={() => handleChannelClick(channel)}>
            # Channel {channel}
          </p>
        </div>
        )
      })}
      <Groups2 allChannels={allChannels} />
      </div>
    );
  }
}

export default Groups;
