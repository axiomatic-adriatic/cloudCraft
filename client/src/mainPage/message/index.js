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
    const newMessage = { ...data.message[0], name: user_name || 'Avery' };
    const date = formatDate(newMessage.datetime)
    const insert = chatHistory.map((message) => {
      if (Object.keys(message)[0] === date) {
        const lastMessageIndex = message[date].length - 1;
        if (message[date][lastMessageIndex].message_id !== newMessage.message_id) {
          message[date].push(newMessage);
        }
      }
      return message;
    });
    setchatHistory(insert);
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

  const formatDate = (string) => {
    const options = { month: 'long', day: 'numeric', weekday: 'long' };
    return new Date(string).toLocaleDateString([], options);
  };

  const groupByDate = (history) => {
    const result = [];
    const groupBy = {};
    history.forEach((entry) => {
      const date = formatDate(entry.datetime);
      if (!groupBy[date]) {
        groupBy[date] = [entry];
      } else {
        groupBy[date] = [...groupBy[date], entry];
      }
    });
    const keys = Object.keys(groupBy);
    const values = Object.values(groupBy);
    keys.forEach((key, index) => {
      result.push({ [key]: values[index] });
    });
    setchatHistory(result);
  };

  useEffect(() => {
    getGroupName();
    groupByDate(messages);
  }, [messages]);

  return (
    <Container>
      <Banner groupName={groupName} />
      <ChatBox
        userId={user_id}
        chatHistory={chatHistory}
        deleteMessage={deleteMessage}
        editMessage={editMessage}
      />
      <TextBox submit={submit} userId={user_id} channelId={channel_id} />
    </Container>
  );
};

export default Message;
