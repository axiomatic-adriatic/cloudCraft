import React from 'react';
import { TextArea } from '../styles';

const axios = require('axios');

const TextBox = () => {
  const groupName = 'group one'
  const postMessage = (id) => {
    axios({
      method: 'post',
      url: '/chatHistory',
      params: { groupId: id },
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => { throw err; });
  };

  return (
    <div className="textbox">
      <TextArea
        onSubmit={postMessage}
        placeholder={`Send a message to ${groupName}`}
      />
    </div>
  );
};

export default TextBox;
