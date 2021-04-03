import React, { useEffect } from 'react';
import { Container } from './styles';
import Banner from './components/Banner';
import ChatBox from './components/ChatBox';
import TextBox from './components/TextBox';

const axios = require('axios');

const Message = ({ groupdId }) => {
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
      <TextBox />
    </Container>
  );
};

export default Message;
