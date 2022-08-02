const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');

const { PORT = 3000 } = process.env;
const DATABASE_URL = 'mongodb://localhost:27017/mestodb';

const app = express();

app.use(express.json());
mongoose.connect(DATABASE_URL);

app.use((req, res, next) => {
  req.user = {
    _id: '62e88386da7f9c4d064d006d',
  };
  next();
});

app.use('/', router);
app.listen(PORT);
