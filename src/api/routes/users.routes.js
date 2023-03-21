const express = require('express');

const {login, register, checkSession} = require('../controllers/users.controllers');
const { isAuth } = require('../middlewares/auth');

const router = express.Router();


router.post('/login', login);
router.post('/register', register);
router.get('/checksession', [isAuth], checkSession);

module.exports = router;