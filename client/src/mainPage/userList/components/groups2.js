import React from 'react';
import axios from 'axios';
import faker from 'faker';
import styles from './styles.css';
import ChannelName from './channelNames.js';

class Groups2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directMessages: [],
    };
    this.getDirectMessages = this.getDirectMessages.bind(this);
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
        channelName: `${success.data[0].channel_name}`
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }

  getDirectMessages(user_id) {
    axios.get('/directMessages', {
      params: {
        userLoggedIn: user_id,
      }
    })
    .then((success) => {
      const channelData = success.data;
      const channels = [];
      for (let i = 0; i < channelData.length; i++) {
        channels.push(channelData[i].channel_id);
      }
      this.setState({
        directMessages: channels,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }


  componentDidMount() {
    const { user_id, username } = this.props;
    this.getDirectMessages(user_id);
  }

  componentDidUpdate(prevProps) {
    const { user_id } = this.props;
    if (this.props.user_id !== prevProps.user_id) {
      this.getDirectMessages(user_id);
    }
  }

  render() {
    const { directMessages, channelName } = this.state;
    const { handleChannelClick, user_id, username} = this.props;

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
            paddingLeft: '15px'
          }}>Direct Messages</h3>
      <div>
        {directMessages && directMessages.map((channel) => {
          const imageSrc = 'https://ca.slack-edge.com/T01JNEETAHH-U01JYR06TBL-ee4d8d5750e5-512';
          return (
            <div
              key={channel}
              className={styles.select}
              onClick={() => handleChannelClick(channel)}
               style={{
               display: 'flex',
               padding: '3px',
               justifyContent: 'left',
               boxSizing: 'border-box'
              }}
            >
              <img
                alt="avatar-img"
                src={imageSrc}
                style={avatarStyle}
              />
          <ChannelName channel={channel} username={username}/>
        </div>
          );
        })}
        </div>
      </div>
    );
  }
}

export default React.memo(Groups2);