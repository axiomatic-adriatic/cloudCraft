import React, { useState, useRef } from 'react';
import axios from 'axios';
import { TextArea, Button } from '../styles';

const TextBox = ({ submit }) => {
  const [input, setInput] = useState('');
  const formRef = useRef(null);
  const groupName = 'group one'; // sample
  // const postMessage = (id) => {
  //   axios({
  //     method: 'post',
  //     url: '/chat',
  //     params: { groupId: id },
  //   })
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((err) => { throw err; });
  // };

  // const onEnterPress = (e) => {
  //   e.preventDefault();
  //   if (e.keyCode === 13 && e.shiftKey === false) {
  //     formRef.submit();
  //   }
  // };
  const sendMessage = (e) => {
    e.preventDefault();
    if (input) {
      submit(input);
      setInput('');
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
          onChange={getInput}
          // onKeyDown={onEnterPress}
        />
        <Button
          // width={4}
          // height={2}
          size={2}
          onClick={sendMessage}
        >
          <i className="fas fa-chevron-circle-right" style={{ color: input ? 'green' : '#808080' }} />
        </Button>
      </form>
    </div>
  );
};

export default TextBox;
