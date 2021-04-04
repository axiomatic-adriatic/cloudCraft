import React, { useState } from 'react';
import axios from 'axios';
import { TextArea } from '../styles';

const TextBox = () => {
  const [input, setInput] = useState('');
  const groupName = 'group one'; // sample
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
        value={input}
      />
    </div>
  );
};

export default TextBox;
