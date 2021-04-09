import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from './styles';
import Banner from './components/Banner';
import ChatBox from './components/ChatBox';
import TextBox from './components/TextBox';

const Message = ({
  channel_id, user_id, userName, messages, getAllTasks, socket,
}) => {
  const [chatHistory, setchatHistory] = useState([]);
  const [groupName, setGroupName] = useState('');

  const formatDate = (string) => {
    const options = { month: 'long', day: 'numeric', weekday: 'long' };
    return new Date(string).toLocaleDateString([], options);
  };


  // const socket = io({
  //   extraHeaders: {
  //     'my-custom-header': channel_id,
  //   },
  // });

  // socket.on('message', (data) => {
    // if (messages.length > 0 && channel_id && user_id && socket.id) {
    //   const incomingMessage = data.message[0];
    //   const lastDay = chatHistory[chatHistory.length - 1];
    //   const allMessages = Object.values(lastDay)[0];
    //   const date = formatDate(incomingMessage.datetime);
    //   console.log(lastDay);
    // console.log(incomingMessage);
    // console.log(allMessages);
    // console.log(date);
    // }
  //   console.log(data.message);
  // });

  const deleteMessage = (messageId) => {
    const allMessages = chatHistory.map((date) => {
      const messages = Object.values(date)[0];
      const results = messages.filter((message) => message.message_id !== Number(messageId));
      return { [Object.keys(date)[0]]: results };
    });
    setchatHistory(allMessages);
    axios({
      method: 'put',
      url: '/chat/delete',
      params: { message_id: Number(messageId) },
    })
      .catch((err) => { throw err; });
  };

  const getGroupName = () => {
    const userNames = messages.map((message) => message.name);
    const group = [...new Set(userNames)];
    setGroupName(group.join(', '));
  };

  const submit = (messageObject) => {
    socket.emit('message', messageObject);
    // const time = new Date();
    // const date = formatDate(time);
    // const lastDay = chatHistory[chatHistory.length - 1];
    // const allMessages = Object.values(lastDay)[0];
    // const latestMessages = allMessages[allMessages.length - 1];
    // const newMessageId = latestMessages.message_id + 1;
    // const newMessage = {
    //   ...messageObject, name: user_name || 'Avery', message_id: newMessageId, datetime: time,
    // };
    // const updatedMessages = chatHistory.map((message) => {
    //   if (Object.keys(message)[0] === date) {
    //     message[date].push(newMessage);
    //   }
    //   return message;
    // });
    // if (Object.keys(lastDay)[0] !== date) {
    //   updatedMessages.push({ [date]: [newMessage] });
    // }
    // setchatHistory(updatedMessages);
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

  const addTask = (e) => {
    e.preventDefault();
    const messageId = e.target.closest('.messageContainer').getAttribute('data-key');
    const messageText = e.target.closest('.messageContainer').getAttribute('data-message');
    const taskObject = { user_id, message_text: messageText, message_id: messageId };
    axios.post('/addToTask', taskObject)
      .then(() => getAllTasks())
      .catch((err) => { throw err; });
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
        addTask={addTask}
      />
      <TextBox submit={submit} userId={user_id} channelId={channel_id} />
    </Container>
  );
};

export default Message;
