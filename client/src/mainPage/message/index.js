
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { Container } from './styles';
import Banner from './components/Banner';
import ChatBox from './components/ChatBox';
import TextBox from './components/TextBox';

const axios = require('axios');

const Message = ({ groupdId }) => {
  const [messages, setMessages] = useState([]);
  // const [input, setInput] = useState('');
  const socket = io();

  // const realTime = () => {
    socket.on('messages', (data) => {
      setMessages(data.message);
      console.log(data.message);
    });
    // }
    const postMessage = (message) => {
      console.log('messagessss')
      socket.emit('message', message )
    }

  const getChatHistory = (id) => {
    axios({
      method: 'get',
      url: '/chatHistory',
      params: { groupId: id },
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => { throw err; });
  };

  // useEffect(() => {
  //   getChatHistory(groupdId);
  // });

  return (
    <Container>
      <Banner />
      <ChatBox />
      <TextBox postMessage={postMessage}/>
    </Container>
  );
};

export default Message;

// import React from 'react';
// import { io } from 'socket.io-client';
// import Banner from './components/Banner';
// import TextBox from './components/TextBox';

// const socket = io({
//   extraHeaders: {
//     'my-custom-header': '1234',
//   },
// });

// socket.on('date', (data) => {
//   console.log(data.date);
// });

// const Message = () => (
//   <div>
//     <h1>I am message</h1>
//     <Banner />
//     <TextBox />
//   </div>
// );

// export default Message;
