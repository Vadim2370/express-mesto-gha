const router = require('express').Router();
const { createUser, login } = require('../controllers/users');
const { signInValidation, signUpValidation } = require('../middlewares/validation');

router.post('/signin', signInValidation, login);
router.post('/signup', signUpValidation, createUser);

module.exports = router;
