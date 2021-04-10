/* eslint-disable react/jsx-filename-extension */
/* eslint-disable camelcase */
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './styles.css';
import ChannelName from './channelNames';

class Groups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allChannels: [],
    };
    this.getAllChannels = this.getAllChannels.bind(this);
  }

  // eslint-disable-next-line react/sort-comp
  getAllChannels(userID) {
    axios.get('/channels', {
      params: {
        userLoggedIn: userID,
      },
    })
      .then((response) => {
        const channelData = response.data;
        const channels = [];
        for (let i = 0; i < channelData.length; i += 1) {
          channels.push(channelData[i].channel_id);
        }
        this.setState({
          allChannels: channels,
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }

  componentDidMount() {
    const { user_id } = this.props;
    this.getAllChannels(user_id);
  }

  componentDidUpdate(prevProps) {
    const { user_id } = this.props;
    if (user_id !== prevProps.user_id) {
      this.getAllChannels(user_id);
    }
  }

  render() {
    const { allChannels } = this.state;
    const { handleChannelClick } = this.props;

    return (
      <div
        className="channels-container"
        style={{
          paddingTop: '5px',
        }}
      >
        <h3
          style={{
            paddingLeft: '15px',
          }}
        >
          Channels
        </h3>
        {allChannels && allChannels.map((channel) => (
          <div
            key={channel}
            role="button"
            tabIndex={0}
            onKeyPress={this.handleKeyPress}
            className={styles.select}
            onClick={() => handleChannelClick(channel)}
          >
            <ChannelName channel={channel} />
          </div>
        ))}
      </div>
    );
  }
}

Groups.propTypes = {
  user_id: PropTypes.number,
  handleChannelClick: PropTypes.func,
};

Groups.defaultProps = {
  user_id: 2,
  handleChannelClick: null,
};

export default Groups;
