const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const router = require('./routes');
const messagesController = require('./controller/messages');

const port = 3005;

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/home/', express.static(path.join(__dirname, '../client/dist')));

let test = 1;

io.on('connection', (client) => {
  // temp room
  test += 1;
  // TODO: replace with channel id
  const room = Math.floor(test / 2);

  client.join(room);
  messagesController.getMessages(room/* will be replaced with channel id from client */)
    .then((history) => {
      // send back message history of specific channel when first connect
      client.emit('message', { message: history });
    });
  console.log(room);
  client.on('message', (data) => {
    console.log(data);
    messagesController.createMessage(data);
    io.to(room).emit('message', { message: data });
  });
});

app.use(router);
server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
