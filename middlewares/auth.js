const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../controllers/users');
const UnauthError = require('../errors/UnauthError');

const auth = (req, res, next) => {
  const token = req.cookies.jwt;
  let payload;
  try {
    payload = jwt.verify(token, JWT_KEY);
  } catch (err) {
    throw new UnauthError('Выполните вход');
  }
  req.user = payload;
  next();
};

module.exports = auth;
