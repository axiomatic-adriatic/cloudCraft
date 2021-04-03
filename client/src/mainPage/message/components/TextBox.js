import React, { useState } from 'react';
import { TextArea } from '../styles';
import { io } from 'socket.io-client';


const axios = require('axios');

const TextBox = ({postMessage}) => {
  const [input, setInput] = useState('');
  // const postMessage = (id) => {
  //   axios({
  //     method: 'post',
  //     url: '/chatHistory',
  //     params: { groupId: id },
  //   })
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((err) => { throw err; });
  // };

  // const socket = io();

  // socket.emit()

  const getInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  }
  return (
    <div className="textbox">
      <TextArea
        onSubmit={()=>postMessage(input)}
        value={input}
        onChange={getInput}/>
    </div>
  );
};

export default TextBox;
