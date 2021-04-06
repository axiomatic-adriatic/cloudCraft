import React, { useState, useRef, useEffect } from 'react';
import { Header, Paragraph, Button } from '../styles';
import { dummyData } from './dummyData';

const ChatBox = ({ chatHistory, addTask }) => {
  const messageEndRef = useRef(null);
  const deleteMessage = (e) => {
    e.preventDefault();
    console.log('delete');
  };

  const scrollToBottom = () => {
    messageEndRef.current.scrollIntoView(true);
  };

  useEffect(() => {
    scrollToBottom();
  });
  return (
    <div className="chatbox">
      {chatHistory.map((message) => (
        <div
          className="messageContainer"
          key={message.message_id}
        >
          <Header
            className="username"
            size={0.9}
            color="#202020"
          >
            {message.user_id}
          </Header>
          <Paragraph
            className="message"
            size={0.8}
            color="#404040"
          >
            {message.message_text}
          </Paragraph>
          <Paragraph
            className="dateTime"
            size={0.7}
            color="#808080"
          >
            {message.datetime}
          </Paragraph>
          <div className="extra">
            <div className="options">
              <i className="fas fa-plus addTask" onClick={addTask} />
              <i className="far fa-trash-alt delete" onClick={deleteMessage} />
            </div>
          </div>
        </div>
      ))}
      <div ref={messageEndRef} />
    </div>
  );
};

export default ChatBox;
