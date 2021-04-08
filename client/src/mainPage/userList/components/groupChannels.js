import React from 'react';
import axios from 'axios';
import styles from './styles.css';

class GroupChannels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channelNames: null,
    };
    this.getChannelNames = this.getChannelNames.bind(this);
  }

  getChannelNames(channels) {
    let names = [];
    for (let i = 0; i < channels.length; i++) {
      let currentChannel = channels[i];
      axios.get('/channelName', {
        params: {
          channel: currentChannel
        }
      })
      .then((success) => {
        names.push(success.data[0].channel_name);
      })
      .catch((err) => {
        console.log(err);
      })
    }
    console.log('names:', names);
    this.setState({
      channelNames: names
    })
  }

  componentDidMount() {
    const { groupChannels } = this.props;
    console.log('group channels in group channels:', groupChannels);
    this.getChannelNames(groupChannels);
  }

  render() {
    const { channelNames } = this.state;
    const { groupChannels } = this.props;
    return (
      <div>
        <h3>Group Channels</h3>
        {channelNames && channelNames.length > 0 && <h3>{channelNames[0]}</h3>}
      </div>
    );
  }
}

export default GroupChannels;
