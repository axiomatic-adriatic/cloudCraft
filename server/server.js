const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/home/', express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.render('index');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})