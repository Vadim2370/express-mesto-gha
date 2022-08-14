const router = require('express').Router();
const { errors } = require('celebrate');
const auth = require('../middlewares/auth');
const userRouter = require('./users');
const cardRouter = require('./cards');
const publicRouter = require('./public');
const NotFoundError = require('../errors/NotFoundError');

router.use(publicRouter);
router.use(auth, userRouter);
router.use(auth, cardRouter);
router.use(errors());
router.use(auth, (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;
