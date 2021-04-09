import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from './styles';
import Banner from './components/Banner';
import ChatBox from './components/ChatBox';
import TextBox from './components/TextBox';

const Message = ({
  channel_id, user_id, user_name, messages, getAllTasks, socket
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

  const submit = (messageObject) => {
    socket.emit('message', messageObject);
    const date = formatDate(new Date());
    const lastDay = chatHistory[chatHistory.length - 1];
    const allMessages = Object.values(lastDay)[0];
    const latestMessages = allMessages[allMessages.length - 1];
    const newMessageId = latestMessages.message_id + 1;
    const newMessage = { ...messageObject, name: user_name || 'Avery', message_id: newMessageId, datetime: date };
    const updatedMessages = chatHistory.map((message) => {
      if (Object.keys(message)[0] === date) {
        message[date].push(newMessage);
        console.log('test')
      }
      return message;
    });
    if (Object.keys(lastDay)[0] !== date) {
      updatedMessages.push({ [date]: [newMessage] });
    }
    setchatHistory(updatedMessages);
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
    console.log(e.target.closest('.messageContainer').getAttribute('data-key'));
    // post request to task table, once post request is done
    // update current message disabled column to true
    // call getAllTasks();
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
        addTask={addTask}
      />
      <TextBox submit={submit} userId={user_id} channelId={channel_id} />
    </Container>
  );
};

export default Message;
