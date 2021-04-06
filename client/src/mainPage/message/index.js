import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';
import { Container } from './styles';
import Banner from './components/Banner';
import ChatBox from './components/ChatBox';
import TextBox from './components/TextBox';

const Message = ({ channel_id, user_id }) => {
  // need messages, timestamp and username
  // message with be store as object
  // {username: name, message: 'some message', dateTime: date, messageId: id}
  const [messages, setMessages] = useState([]);
  const [groupName, setGroupName] = useState('');
  const getChatHistory = (id) => {
    axios({
      method: 'get',
      url: '/chat',
      params: { channel_id },
    })
      .then((result) => {
        setMessages(result.data);
        // console.log(result);
      })
      .catch((err) => { throw err; });
  };

  const randomNumber = Math.floor(Math.random() * 100000 + 1);

  const socket = io({
    extraHeaders: {
      'my-custom-header': channel_id,
    },
  });

  // socket.on('date', (data) => {
  //   console.log(data.date);
  // });

  socket.on('message', (data) => {
    console.log(1);
    // setMessages(data.message);
  });

  // message = {
  //   user_id: userID,
  //   channel_id: channelID,
  //   message_text: message,
  // }
  const submit = (message) => {
    socket.emit('message', message);
    setMessages([...messages, message]);
  };

  useEffect(() => {
    getChatHistory(channel_id);
  }, [channel_id]);

  return (
    <Container>
      <Banner groupName={groupName} />
      <ChatBox chatHistory={messages} />
      <TextBox submit={submit} userId={user_id} channelId={channel_id} />
    </Container>
  );
};

export default Message;

// axios({
//   method: 'post',
//   url: '/chat',
//   body: {
//     groupId: message.groupId,
//     message: message.message,
//     userId: message.userId,
//   },
// })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => { throw err; });
