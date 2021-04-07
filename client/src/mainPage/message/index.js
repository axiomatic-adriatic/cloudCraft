import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';
import { Container } from './styles';
import Banner from './components/Banner';
import ChatBox from './components/ChatBox';
import TextBox from './components/TextBox';

const Message = ({
  channel_id, user_id, user_name, messages,
}) => {
  const [chatHistory, setchatHistory] = useState([]);
  const [groupName, setGroupName] = useState('');

  const socket = io({
    extraHeaders: {
      'my-custom-header': channel_id,
    },
  });

  socket.on('message', (data) => {
    const message = { ...data.message[0], name: user_name || 'Avery' };
    setchatHistory([...chatHistory, message]);
  });

  const deleteMessage = (messageId) => {
    const allMessages = chatHistory.filter((message) => message.message_id !== Number(messageId));
    setchatHistory(allMessages);
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
        message.message_text = message_text;
      }
      return message;
    });
    // axios({
    //   method: 'post',
    //   url: '/chat',
    //   params: { message_id, message_text },
    // })
    //   .catch((err) => { throw err; });
  };

  const getGroupName = () => {
    const userNames = messages.map((message) => message.name);
    const group = [...new Set(userNames)];
    setGroupName(group.join(', '));
  };

  const submit = (message) => {
    socket.emit('message', message);
  };

  useEffect(() => {
    getGroupName();
    setchatHistory(messages);
  }, [messages]);

  return (
    <Container>
      <Banner groupName={groupName} />
      <ChatBox
        userId={user_id}
        chatHistory={chatHistory || null}
        deleteMessage={deleteMessage}
        editMessage={editMessage}
      />
      <TextBox submit={submit} userId={user_id} channelId={channel_id} />
    </Container>
  );
};

export default Message;
