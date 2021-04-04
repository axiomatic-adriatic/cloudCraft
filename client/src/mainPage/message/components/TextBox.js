import React from 'react';
import axios from 'axios';
import { TextArea } from '../styles';

const TextBox = () => {
  const groupName = 'group one';
  const postMessage = (id) => {
    axios({
      method: 'post',
      url: '/chat',
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
