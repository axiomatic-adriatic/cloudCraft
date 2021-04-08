import React from 'react';
import axios from 'axios';
import faker from 'faker';
import styles from './styles.css';
// import GroupChannels from './groupChannels';

class Groups2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directMessages: [],
    };
    this.getDirectMessages = this.getDirectMessages.bind(this);
  }

  getDirectMessages() {
    const { user_id } = this.props;
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
    this.getDirectMessages();
  }

  render() {
    const { directMessages } = this.state;

    const avatarStyle = {
      verticalAlign: 'middle',
      width: '35px',
      height: '35px',
      borderRadius: '15%',
      marginLeft: '15px',
    };

    const { handleChannelClick } = this.props;

    return (
      <div className={styles.select}>
        <h3>Direct Messages </h3>
        {directMessages.map((channel) => {
          const imageSrc = faker.image.avatar();
          return (
            <div
              key={channel}
              className={styles.select}
            >
              <img
                alt="avatar-img"
                src={imageSrc}
                style={avatarStyle}
              />
             <p onClick={() => handleChannelClick(channel)}
            style={{
              fontSize: '14px',
              marginLeft: '25px',
              cursor: 'pointer',
            }}>
            # Channel {channel}
          </p>
        </div>
          );
        })}
      </div>
    );
  }
}

export default React.memo(Groups2);
