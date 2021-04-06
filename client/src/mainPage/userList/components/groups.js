import React from 'react';
import axios from 'axios';

class Groups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
    }
    this.getChannels = this.getChannels.bind(this);
  }

  getChannels() {
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
      <p
      key={channel.channel_id
      }
      style={{
        marginLeft: '15px',
        cursor: 'pointer',
      }}
      onClick={() => handleChannelClick(channel.channel_id)}>#{channel.channel_name}</p>
      )
    })
    return (
      <div
      className="channels-container"
      style={{
        marginLeft: '15px'
      }}>
        <h3>Channels</h3>
        {channelList}
      </div>
    )
  }
}

export default Groups;
