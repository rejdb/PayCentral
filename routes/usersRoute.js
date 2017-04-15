const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const User = require('../models/user');

router.post('/register', (req, rsp, next) => {
    let newUser = new User({
        DisplayName: req.body.DisplayName,
        Email: req.body.Email,
        Password: req.body.Password
    });

    User.addUser(newUser, (err, user) => {
        if(err) {
            rsp.json({success: false, message: 'Failed to register user!'});
        }else{
            rsp.json({success: true, message: 'User Registered!'});
        }
    });
});

router.post('/authenticate', (req, res, next) => {
    const email = req.body.Email;
    const pwd = req.body.Password;

    User.getUserByEmail(email, (err, user) => {
        if(err) throw err;
        if(!user) {
            return res.json({success: false, message: 'User Not Found!'});
        }

        User.comparePwd(pwd, user.Password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch) {
                const token = jwt.sign(user, config.secret, {
                    expiresIn: 28800 // 8 Hours
                });

                res.json({
                    success: true,
                    token: 'JWT '+token,
                    user: {
                        id: user._id,
                        DisplayName: user.DisplayName,
                        Email: user.Email
                    }
                });
            }else{
                return res.json({success: false, message: 'Password Not Match!'});
            }
        });
    });
});

router.get('/profile', passport.authenticate('jwt', {session:false}), (req, rsp, next) => {
    // console.log(req);
    rsp.json({user: req.user});
    // rsp.send('ok!');
});

module.exports = router;