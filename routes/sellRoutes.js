const express = require('express');
const router = express.Router();
const passport = require('passport');

const _sell = require('../controller/sellorder');
const _error = require('../helpers/error.helper');

router.get('/', passport.authenticate('jwt', {session:false, failWithError:true}), _sell.getAllTrans, _error.unauth);
router.post('/billspay', passport.authenticate('jwt', {session:false, failWithError:true}), _sell.billspay, _error.unauth);


module.exports = router;