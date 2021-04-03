import React from 'react';
import { Container } from './styles.js';
import Banner from './components/Banner.js';
import ChatBox from './components/ChatBox.js';
import TextBox from './components/TextBox.js';

const Message = () => {
  return (
    <Container>
      <Banner />
      <ChatBox />
      <TextBox />
    </Container>
  )
}

export default Message;