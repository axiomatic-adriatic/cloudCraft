const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const router = require('./routes');
const messagesController = require('./controller/messages');

const port = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/home/', express.static(path.join(__dirname, '../client/dist')));

// app.get('/', (req, res) => {
//   res.render('index');
// })

io.on('connection', (client) => {
  messagesController.getMessages(1/* will be replaced with channel id from client */)
    .then((history) => {
      // send back message history of specific channel when first connect
      io.emit('message', { message: history });
    });
  console.log(client.handshake.headers['my-custom-header']);
  client.on('message', (data) => {
    console.log(data);
  });
  setInterval(() => {
    io.emit('date', { date: new Date() });
  }, 10000);
});

app.use(router);
server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
