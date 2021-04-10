import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class ChannelName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.getChannelName = this.getChannelName.bind(this);
  }

  // eslint-disable-next-line react/sort-comp
  getChannelName(channelID) {
    axios.get('/channelName', {
      params: {
        channel: channelID,
      },
    })
      .then((success) => {
        this.setState({
          name: `${success.data[0].channel_name}`,
        });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }

  componentDidMount() {
    const { channel } = this.props;
    this.getChannelName(channel);
  }

  render() {
    const { username } = this.props;
    let { name } = this.state;
    if (name.includes(username)) {
      name = name.replace(`${username}`, '');
    }

    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div>
        {name && name.length > 0 && <p>{name}</p>}
      </div>
    );
  }
}

ChannelName.propTypes = {
  channel: PropTypes.number,
  username: PropTypes.string,
};

ChannelName.defaultProps = {
  channel: null,
  username: null,
};

export default ChannelName;
