const express = require('express');
const router = express.Router();
const passport = require('passport');

const _sell = require('../controller/sellorder');

router.get('/', passport.authenticate('jwt', {session:false}), _sell.getAllTrans);
router.post('/billspay', passport.authenticate('jwt', {session:false}), _sell.billspay);


module.exports = router;