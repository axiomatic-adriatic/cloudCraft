import React from 'react';
import { Header, Paragraph } from '../styles';

const dummydata = [{
  username: 'peter parker', message: 'I am spiderman', dateTime: '1:39pm', messageId: 1,
}];

const ChatBox = ({ chatHistory }) => (
  <div className="chatbox">
    {dummydata.map((message) => (
      <div className="messageContainer" key={message.messageId}>
        <Header
          className="username"
          size={1.2}
          color="black"
        >
          {message.username}
        </Header>
        <Paragraph
          className="message"
          size={1}
          color="black"
        >
          {message.message}
        </Paragraph>
        <Paragraph
          className="dateTime"
          size={0.7}
          color="grey"
        >
          {message.dateTime}
        </Paragraph>
      </div>
    ))}
  </div>
);

export default ChatBox;
