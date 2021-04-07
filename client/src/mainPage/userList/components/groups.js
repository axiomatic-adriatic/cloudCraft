import React from 'react';
import axios from 'axios';
import styles from './styles.css';

class Groups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
    }
    this.getChannels = this.getChannels.bind(this);
  }

  getChannels() {
    const { user_id } = this.props;
    axios.get('/channels')
    .then((response) => {
     const channelData = response.data;
     this.setState({
       channels: channelData
     })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  componentDidMount() {
    this.getChannels();
  }

  render() {
    const { channels } = this.state;
    const { handleChannelClick } = this.props;
    const channelList = channels.map((channel) => {
      return (
      <div key={channel.channel_id
      } className={styles.select}>
      <p
      onClick={() => handleChannelClick(channel.channel_id)}># {channel.channel_name}</p>
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
