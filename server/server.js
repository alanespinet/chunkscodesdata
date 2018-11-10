const express = require('express');
const mongoose = require('./mongoose/mongoose');

const app = express();

app.get('/', (req, res) => {
  res.send('MongoDB Chunkscode App');
});

app.listen(7200, () => {
  console.log('Server running');
});
