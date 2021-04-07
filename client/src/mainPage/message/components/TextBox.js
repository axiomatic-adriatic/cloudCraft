import React, { useState, useRef } from 'react';
// import axios from 'axios';
import { TextArea, Button } from '../styles';

const TextBox = ({ submit, userId, channelId }) => {
  const [input, setInput] = useState('');
  const formRef = useRef(null);
  const groupName = 'group one'; // sample

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
      <form ref={formRef}>
        <TextArea
          placeholder={`Send a message to ${groupName}`}
          value={input}
          onChange={(e) => getInput(e)}
          onKeyDown={(e) => onEnterPress(e)}
        />
        <Button
          size={1.2}
          onClick={sendMessage}
        >
          <i className="fas fa-paper-plane" style={{ color: input ? '#04A777' : '#808080' }} />
        </Button>
      </form>
    </div>
  );
};

export default TextBox;
