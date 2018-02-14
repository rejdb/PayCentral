const express = require('express');
const router = express.Router();
const passport = require('passport');
const _user = require('../controller/user');

router.post('/register', _user.register);
router.post('/authenticate', _user.authenticate);

router.get('/profile', passport.authenticate('jwt', {session:false}), _user.profile);

module.exports = router;