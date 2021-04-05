import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from './styles';
import Banner from './components/Banner';
import ChatBox from './components/ChatBox';
import TextBox from './components/TextBox';

const Message = ({ groupdId }) => {
  // need messages, timestamp and username
  // message with be store as object
  // {username: name, message: 'some message', dateTime: date, messageId: id}
  const [messages, setMessages] = useState([]);
  const [groupName, setGroupName] = useState('');
  const getChatHistory = (id) => {
    axios({
      method: 'get',
      url: '/chat',
      params: { groupId: id },
    })
      .then((result) => {
        setMessages(result);
        console.log(result);
      })
      .catch((err) => { throw err; });
  };

  const submit = (message) => {
    console.log(message);
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
  };

  // useEffect(() => {
  //   getChatHistory(groupdId);
  // });

  return (
    <Container>
      <Banner groupName={groupName} />
      <ChatBox chatHistry={messages} />
      <TextBox submit={submit} />
    </Container>
  );
};

export default Message;
