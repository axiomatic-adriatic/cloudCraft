import axios from 'axios';

function getChannelName(channelID) {
  axios.get('/channelName', {
    params: {
      channel: channelID,
    }
  })
  .then((success) => {
    const name = success.data[0].channel_name;
  })
  .catch((err) => {
    console.log(err);
  });
}

export default getChannelName;
