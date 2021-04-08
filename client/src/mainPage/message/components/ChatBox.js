/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef, useEffect } from 'react';
import { Header, Paragraph } from '../styles';

const ChatBox = ({
  chatHistory, deleteMessage, editMessage, userId, addTask,
}) => {
  const messageEndRef = useRef(null);

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
    messageEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);
  return (
    <div className="chatbox">
      {chatHistory.map((entry) => (
        <div key={Object.keys(entry)[0]}>
          {Object.values(entry)[0].length === 0 ? null : <div className="date">{Object.keys(entry)[0]}</div>}
          {entry[Object.keys(entry)[0]].map((message) => (
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
                {message.name}
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
                  {message.user_id === userId ? null : message.disabled === 1 ? <i className="fas fa-check" title="Claimed" /> : (
                    <i
                      className="fas fa-plus addTask"
                      title="Add to Task"
                      onClick={addTask}
                    />
                  )}
                  {message.user_id === userId ? (
                    <i
                      className="far fa-edit edit"
                      title="Edit Message"
                      onClick={edit}
                    />
                  ) : null}
                  {message.user_id === userId ? (
                    <i
                      className="far fa-trash-alt delete"
                      title="delete Message"
                      onClick={remove}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
      <div ref={messageEndRef} />
    </div>
  );
};

export default ChatBox;
