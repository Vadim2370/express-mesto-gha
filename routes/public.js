const router = require('express').Router();
const { createUser, login } = require('../controllers/users');
const { signInValidation, signUpValidation } = require('../middlewares/validation');

router.post('/signin', signInValidation, login);
router.post('/signup', signUpValidation, createUser);
router.get('/signout', (req, res) => {
  res.clearCookie('jwt').send({ message: 'Выход' });
});

module.exports = router;
