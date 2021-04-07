import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';
import { Container } from './styles';
import Banner from './components/Banner';
import ChatBox from './components/ChatBox';
import TextBox from './components/TextBox';

const Message = ({ channel_id, user_id, user_name, messages }) => {
  // const [messages, setMessages] = useState([]);
  const [groupName, setGroupName] = useState('');

  // const getChatHistory = () => {
  //   axios({
  //     method: 'get',
  //     url: '/chat',
  //     params: { channel_id },
  //   })
  //     .then((result) => {
  //       const names = result.data.map((message) => message.name);
  //       const userNames = [...new Set(names)];
  //       const allMessages = result.data.filter((message) => message.is_delete === 0);
  //       setMessages(allMessages);
  //       setGroupName(userNames.join(', '));
  //     })
  //     .catch((err) => { throw err; });
  // };

  const socket = io({
    extraHeaders: {
      'my-custom-header': channel_id,
    },
  });

  socket.on('message', (data) => {
    console.log('test');
    const message = { ...data.message[0], name: user_name || 'Avery' };
    // setMessages([...messages, message]);
  });

  const deleteMessage = (messageId) => {
    const allMessages = messages.filter((message) => message.message_id !== Number(messageId));
    setMessages(allMessages);
    axios({
      method: 'put',
      url: '/chat/delete',
      params: { message_id: Number(messageId) },
    })
      .catch((err) => { throw err; });
  };

  const editMessage = (editdMessage) => {
    const { message_id, message_text } = editdMessage;
    const allMessages = messages.filter((message) => {
      if (message.message_id === message_id) {
        message.message_text = message_text
      }
      return message;
    });
    setMessages(allMessages);
    // axios({
    //   method: 'post',
    //   url: '/chat',
    //   params: { message_id, message_text },
    // })
    //   .catch((err) => { throw err; });
  };

  const submit = (message) => {
    socket.emit('message', message);
  };

  // useEffect(() => {
  //   getChatHistory();
  // }, [channel_id]);

  return (
    <Container>
      <Banner groupName={groupName} />
      <ChatBox
        userId={user_id}
        chatHistory={messages}
        deleteMessage={deleteMessage}
        editMessage={editMessage}
      />
      <TextBox submit={submit} userId={user_id} channelId={channel_id} />
    </Container>
  );
};

export default Message;
