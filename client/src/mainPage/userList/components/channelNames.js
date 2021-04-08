import React from 'react';
import axios from 'axios';

class ChannelName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
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
        name: `${success.data[0].channel_name}`
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }

  componentDidMount() {
    const { channel } = this.props;
    this.getChannelName(channel);

  }

  render() {
    const { channel } = this.props;
    const { name } = this.state;
    return (
      <div>
      {name && name.length > 0 && <p>{name}</p>}
      </div>
    );
  }
}

export default ChannelName;