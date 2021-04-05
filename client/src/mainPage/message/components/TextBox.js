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
          width={4}
          height={2}
          size={1}
          onClick={(e) => submit(e, input)}
        >
          &#10148;
        </Button>
      </form>
    </div>
  );
};

export default TextBox;
