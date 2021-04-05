import React from 'react';
import axios from 'axios';

class Groups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
    }
    this.getChannels = this.getChannels.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(channelID) {
    console.log('channel clicked', { channelID });
    //
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
    const channelList = channels.map((channel) => {
      return (
      <p
      key={channel.channel_id
      }
      style={{
        marginLeft: '15px',
      }}
      onClick={() => this.handleClick(channel.channel_id)}>#{channel.channel_name}</p>
      )
    })
    return (
      <div
      className="channels-container"
      style={{
        // display: 'flex',
        marginLeft: '15px'
      }}>
        <h3>Channels</h3>
        {channelList}
      </div>
    )
  }
}

export default Groups;
