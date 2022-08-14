const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
const router = require('./routes');

const { PORT = 3000 } = process.env;
const DATABASE_URL = 'mongodb://localhost:27017/mestodb';

const app = express();
const limiter = rateLimit({
  windowsMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeader: false,
});

app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(limiter);

mongoose.connect(DATABASE_URL);

app.use('/', router);
app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500 ? 'Ошибка сервера' : message,
  });
  next();
});

app.listen(PORT);
