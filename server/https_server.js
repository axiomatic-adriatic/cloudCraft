const express = require('express');
const path = require('path');
const fs = require('fs');

const privateKey = fs.readFileSync(path.join(__dirname, '../ssl/private.key'));
const certificate = fs.readFileSync(path.join(__dirname, '../ssl/certificate.crt'));
const credentials = { key: privateKey, cert: certificate };

const app = express();
const server = require('https').createServer(credentials, app);
const io = require('socket.io')(server);
const router = require('./routes');
const messagesController = require('./controller/messages');

const port = 3005;

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/home/', express.static(path.join(__dirname, '../client/dist')));

io.on('connection', (client) => {
  const room = client.handshake.headers['my-custom-header'];
  client.join(room);
  client.on('message', (data) => {
    console.log(data);
    messagesController.createMessage(data)
      .then((message) => {
        io.to(room).emit('message', { message });
      });
  });
});
app.use(router);
server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
