import React, { useState, useRef } from 'react';
// import axios from 'axios';
import { TextArea, Button } from '../styles';

const TextBox = ({
  submit, userId, channelId, groupName,
}) => {
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (input) {
      const message = {
        user_id: userId,
        channel_id: channelId,
        message_text: input,
      };
      setInput('');
      submit(message);
    }
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false && input) {
      sendMessage(e);
    }
  };

  const getInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <div className="textbox">
      <TextArea
        placeholder={`Send a message to ${groupName}`}
        value={input}
        onChange={(e) => getInput(e)}
        onKeyDown={(e) => onEnterPress(e)}
      />
      <Button
        size={1.4}
        onClick={sendMessage}
      >
        <i className="fas fa-paper-plane" style={{ color: input ? '#04A777' : '#808080' }} />
      </Button>
    </div>
  );
};

export default TextBox;
