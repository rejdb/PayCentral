const express = require('express');
const router = express.Router();
const passport = require('passport');

const _coins = require('../controller/coins');
const _error = require('../helpers/error.helper');

router.get('/', _coins._check_api_route);
router.post('/', _coins._check_api_route);

router.get('/accounts', passport.authenticate('jwt', {session:false, failWithError:true}), _coins.get_accounts, _error.unauth);

// Gaming and Mobile Loading
router.get('/load-networks', passport.authenticate('jwt', {session:false, failWithError:true}), _coins.get_mobile_networks, _error.unauth);
router.get('/gaming-pins', passport.authenticate('jwt', {session:false, failWithError:true}), _coins.get_gaming_pins, _error.unauth);

// Bills Payment Route
router.get('/bills-category', passport.authenticate('jwt', {session:false, failWithError:true}), _coins.get_bills_category, _error.unauth);
router.get('/bills-category/:cat_id', passport.authenticate('jwt', {session:false, failWithError:true}), _coins.get_bills_category_id, _error.unauth);

// Casho - Out Routes
router.get('/cashout', passport.authenticate('jwt', {session:false, failWithError:true}), _coins.get_cashout_category, _error.unauth);
router.get('/cashout/:cat_id', passport.authenticate('jwt', {session:false, failWithError:true}), _coins.get_cashout_outlet, _error.unauth);
router.get('/cashout-featured', passport.authenticate('jwt', {session:false, failWithError:true}), _coins.get_cashout_featured, _error.unauth);

// Cash - In Routes
router.get('/cashin', passport.authenticate('jwt', {session:false, failWithError:true}), _coins.get_cashin_category, _error.unauth);
router.get('/cashin/:cat_id', passport.authenticate('jwt', {session:false, failWithError:true}), _coins.get_cashin_outlet, _error.unauth);
router.get('/cashin-featured', passport.authenticate('jwt', {session:false, failWithError:true}), _coins.get_cashin_featured, _error.unauth);

module.exports = router;