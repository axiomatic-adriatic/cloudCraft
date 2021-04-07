/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useRef, useEffect } from 'react';
import { Header, Paragraph, Button } from '../styles';
import { dummyData } from './dummyData';

const ChatBox = ({ chatHistory, deleteMessage, editMessage, addTask }) => {
  const messageEndRef = useRef(null);

  const formatDate = (string) => {
    const options = { month: 'long', day: 'numeric', weekday: 'long' };
    return new Date(string).toLocaleDateString([], options);
  };

  const formatTime = (string) => {
    const options = { hour: '2-digit', minute: '2-digit' };
    return new Date(string).toLocaleTimeString([], options);
  };

  const remove = (e) => {
    e.preventDefault();
    const messageId = e.target.closest('.messageContainer').getAttribute('data-key');
    deleteMessage(messageId);
  };

  const edit = (e) => {
    e.preventDefault();
    const messageId = e.target.closest('.messageContainer').getAttribute('data-key');
    editMessage(messageId);
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
          data-key={message.message_id}
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
            {formatTime(message.datetime)}
          </Paragraph>
          <div className="extra">
            <div className="options">
              <i
                className="fas fa-plus addTask"
                title="Add to Task"
                onClick={addTask}
              />
              <i
                className="far fa-edit edit"
                title="Edit Message"
                onClick={edit}
              />
              <i
                className="far fa-trash-alt delete"
                title="delete Message"
                onClick={remove}
              />
            </div>
          </div>
        </div>
      ))}
      <div ref={messageEndRef} />
    </div>
  );
};

export default ChatBox;
