const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const User = require('../models/user');

module.exports.register = (req, rsp, next) => {
    let newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        fullname: {
            first: req.body.firstname,
            last: req.body.lastname,            
        }
    });

    User.find({$or: [{email: newUser.email}, {username: newUser.username}]})
        .exec()
        .then(user => {
            if(user.length >=1) {
                rsp.json({success:false, message:"User already exists!"})
            }else{
                User.addUser(newUser, (err, user) => {
                    if(err) {
                        rsp.json({success: false, message: 'Failed to register user!', errors: err});
                    }else{
                        rsp.json({success: true, message: 'User Registered!'});
                    }
                });
            }
        });
};

module.exports.authenticate = (req, res, next) => {
    const email = req.body.email;
    const pwd = req.body.password;

    User.getUserByEmail(email, (err, user) => {
        if(err) throw err;
        if(!user) {
            return res.json({success: false, message: 'User Not Found!'});
        }

        User.comparePwd(pwd, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch) {
                const token = jwt.sign({_id:user._id}, config.secret, {
                    expiresIn: "1h" // 8 Hours
                });

                res.json({
                    success: true,
                    token: token,
                    user: {
                        _id: user._id,
                        email: user.email,
                        username: user.username,
                        fullname: user.fullname
                    }
                });
            }else{
                return res.json({success: false, message: 'User Not Found!'});
            }
        });
    });
};

module.exports.profile = (req, rsp, next) => {
    // console.log(req);
    rsp.json({user: req.user});
    // rsp.send('ok!');
};