const express = require('express');
const router = express.Router();
const passport = require('passport');

const _coins = require('../controller/coins');

router.get('/', (req, rsp, next) => {
    _coins.get_auth(req.query.url, r => {
        rsp.json(r);
    });
});
router.get('/accounts', passport.authenticate('jwt', {session:false}), _coins.get_accounts);

// Gaming and Mobile Loading
router.get('/load-networks', passport.authenticate('jwt', {session:false}), _coins.get_mobile_networks);
router.get('/gaming-pins', passport.authenticate('jwt', {session:false}), _coins.get_gaming_pins);

// Bills Payment Route
router.get('/bills-category', passport.authenticate('jwt', {session:false}), _coins.get_bills_category);
router.get('/bills-category/:cat_id', passport.authenticate('jwt', {session:false}), _coins.get_bills_category_id);

// Casho - Out Routes
router.get('/cashout', passport.authenticate('jwt', {session:false}), _coins.get_cashout_category);
router.get('/cashout/:cat_id', passport.authenticate('jwt', {session:false}), _coins.get_cashout_outlet);
router.get('/cashout-featured', passport.authenticate('jwt', {session:false}), _coins.get_cashout_featured);

// Cash - In Routes
router.get('/cashin', passport.authenticate('jwt', {session:false}), _coins.get_cashin_category);
router.get('/cashin/:cat_id', passport.authenticate('jwt', {session:false}), _coins.get_cashin_outlet);
router.get('/cashin-featured', passport.authenticate('jwt', {session:false}), _coins.get_cashin_featured);

module.exports = router;