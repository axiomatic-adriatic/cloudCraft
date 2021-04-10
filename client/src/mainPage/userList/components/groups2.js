/* eslint-disable react/jsx-filename-extension */
/* eslint-disable camelcase */
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './styles.css';
import ChannelName from './channelNames';

class Groups2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directMessages: [],
    };
    this.getDirectMessages = this.getDirectMessages.bind(this);
  }

  // eslint-disable-next-line react/sort-comp
  getDirectMessages(user_id) {
    axios.get('/directMessages', {
      params: {
        userLoggedIn: user_id,
      },
    })
      .then((success) => {
        const channelData = success.data;
        const channels = [];
        for (let i = 0; i < channelData.length; i += 1) {
          channels.push(channelData[i].channel_id);
        }
        this.setState({
          directMessages: channels,
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }

  componentDidMount() {
    const { user_id } = this.props;
    this.getDirectMessages(user_id);
  }

  componentDidUpdate(prevProps) {
    const { user_id } = this.props;
    if (user_id !== prevProps.user_id) {
      this.getDirectMessages(user_id);
    }
  }

  render() {
    const { directMessages } = this.state;
    const { handleChannelClick, username } = this.props;

    const avatarStyle = {
      verticalAlign: 'middle',
      width: '35px',
      height: '35px',
      borderRadius: '15%',
      marginRight: '15px',
      paddingLeft: '10px',
      paddingTop: '8px',
    };

    return (
      <div>
        <h3
          style={{
            paddingLeft: '15px',
          }}
        >
          Direct Messages
        </h3>
        <div>
          {directMessages && directMessages.map((channel) => {
            const imageSrc = 'https://ca.slack-edge.com/T01JNEETAHH-U01JYR06TBL-ee4d8d5750e5-72';
            return (
              <div
                key={channel}
                role="button"
                tabIndex={0}
                onKeyPress={this.handleKeyPress}
                className={styles.select}
                onClick={() => handleChannelClick(channel)}
                style={{
                  display: 'flex',
                  padding: '3px',
                  justifyContent: 'left',
                  boxSizing: 'border-box',
                }}
              >
                <img
                  alt="avatar-img"
                  src={imageSrc}
                  style={avatarStyle}
                />
                <ChannelName channel={channel} username={username} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

Groups2.propTypes = {
  user_id: PropTypes.number,
  username: PropTypes.string,
  handleChannelClick: PropTypes.func,
};

Groups2.defaultProps = {
  user_id: 2,
  username: 'Avery',
  handleChannelClick: null,
};

export default React.memo(Groups2);
