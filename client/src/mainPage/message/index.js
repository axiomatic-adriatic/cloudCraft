import React from 'react';
import { io } from 'socket.io-client';
import Banner from './components/Banner';
import TextBox from './components/TextBox';

const socket = io({
  extraHeaders: {
    'my-custom-header': '1234',
  },
});

socket.on('date', (data) => {
  console.log(data.date);
});

const Message = () => (
  <div>
    <h1>I am message</h1>
    <Banner />
    <TextBox />
  </div>
);

export default Message;
