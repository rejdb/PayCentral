const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config/database');

module.exports = function(passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.getUserById(jwt_payload._id, (err, user) => {
            if(err) return done(err, false);

            if(user) {
                return done(null, {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                    balance: user.balance
                });
            }else{
                return done(null, {error: true, message: 'Token Expires!'});
            }
        });
    }));
}