import React from 'react';
import axios from 'axios';
import styles from './styles.css';
import GroupChannels from './groupChannels';

class Groups2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directMessages: [],
      groupChannels: [],
    };
    this.getChannelUsers = this.getChannelUsers.bind(this);
  }

  // eslint-disable-next-line react/sort-comp

  // componentDidMount() {
  //   const { allChannels } = this.props;
  //   // this.getChannelUsers();
  // }

  componentDidUpdate(prevProps) {
    const { allChannels } = this.props;
    if (this.props.allChannels !== prevProps.allChannels) {
      this.getChannelUsers();
    }
  }

  getChannelUsers() {
    const { allChannels } = this.props;

    let directMessageChannels = [];
    let groupMessageChannels = [];

    for (var i = 0; i < allChannels.length; i++) {
      let currentChannel = allChannels[i];
      axios.get('/channelUsers', {
        params: {
          channel: currentChannel
        }
      })
      .then((success) => {
        if (success.data.length === 2) {
          directMessageChannels.push(currentChannel);
        } else {
          groupMessageChannels.push(currentChannel);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }
    this.setState({
      groupChannels: groupMessageChannels,
      directMessages: directMessageChannels
    })
  }

  render() {
    const { groupChannels, directMessages } = this.state;
    console.log('state in groups2:', this.state);
    return (
      <div>
        {groupChannels.length > 0 && <GroupChannels groupChannels={groupChannels} />}
      </div>
    );
  }
}

export default Groups2;
