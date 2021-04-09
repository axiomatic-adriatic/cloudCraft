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
    const userNames = messages.map((message) => {
      if (message.name !== userName) {
        return message.name;
      }
    });
    const removeUndefined = userNames.filter((name) => name !== undefined);
    const group = [...new Set(removeUndefined)];
    setGroupName(group.join(', '));
  };

  const submit = (messageObject) => {
    socket.emit('message', messageObject);
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
    const date = e.target.closest('.messageContainer').getAttribute('data-date');
    chatHistory.forEach((dateOfMessages) => {
      if (Object.keys(dateOfMessages)[0] === date) {
        const allMessages = dateOfMessages[date];
        allMessages.forEach((message) => {
          if (message.message_id === Number(messageId)) {
            message.disabled = 1;
          }
        });
      }
    });
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
      <TextBox submit={submit} userId={user_id} channelId={channel_id} groupName={groupName} />
    </Container>
  );
};

export default Message;
