import React, { useState } from 'react';
import { Header, Paragraph, Button } from '../styles';

const dummydata = [{
  username: 'peter parker', message: "I Know That Look. I Had It A Lot When I Was Your Age... There's No Stopping You. I Want You To Run Because You Don't Have Your Armor. But You Won't... 'Cause You're A Hero.", dateTime: '1:39pm', messageId: 1,
}, {
  username: 'tony stark', message: 'My bond is with the people, and I will serve this great nation at the pleasure of myself. If there’s one thing I’ve proven it’s that you can count on me to pleasure myself', dateTime: '1:39pm', messageId: 2,
}];

const ChatBox = ({ chatHistory }) => {
  const [popup, setPopup] = useState(false);
  return (
    <div className="chatbox">
      {dummydata.map((message) => (
        <div
          className="messageContainer"
          key={message.messageId}
          onMouseEnter={() => setPopup(true)}
          onMouseLeave={() => setPopup(false)}
        >
          <Header
            className="username"
            size={0.9}
            color="#202020"
          >
            {message.username}
          </Header>
          <Paragraph
            className="message"
            size={0.8}
            color="#404040"
          >
            {message.message}
          </Paragraph>
          <Paragraph
            className="dateTime"
            size={0.7}
            color="#808080"
          >
            {message.dateTime}
          </Paragraph>
          <Button
            width={5}
            height={1.5}
            size={0.8}
            style={{ display: popup ? 'block' : 'none' }}
          >
            Add Task
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ChatBox;
