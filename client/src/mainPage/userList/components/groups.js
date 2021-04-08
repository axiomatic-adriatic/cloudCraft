import React from 'react';
import axios from 'axios';
import styles from './styles.css';
import ChannelName from './channelNames.js';
import Groups2 from './groups2.js';

class Groups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allChannels: [],
      channelName: [],
    };
    this.getAllChannels = this.getAllChannels.bind(this);
    this.getChannelName = this.getChannelName.bind(this);
  }

 getChannelName(channelID) {
  axios.get('/channelName', {
    params: {
      channel: channelID,
    }
  })
  .then((success) => {
    this.setState({
      channelName: [...`${success.data[0].channel_name}`]
    })
  })
  .catch((err) => {
    console.log(err);
  });
}

  getAllChannels(userID) {
    const { updateChannels } = this.props;
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

  render() {
    const { allChannels, channelName } = this.state;

    const { handleChannelClick, user_id } = this.props;

    return (
      <div
        className="channels-container"
        style={{
          marginLeft: '15px',
          paddingTop: '5px'
        }}
      >
        <h3>Channels</h3>
        {allChannels && allChannels.map((channel) => {
        return (
        <div key={channel} className={styles.select} onClick={() => handleChannelClick(channel)}>
          <ChannelName channel={channel} />
        </div>
        )
      })}
      </div>
    );
  }
}

export default Groups;
