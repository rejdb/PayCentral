const mongoose = require('mongoose');
const Transaction = require('../models/transaction');
const User = require('../models/user');

module.exports.billspay = (req, rsp, next) => {
    const user = req.body.user;
    const coins = req.body.coins;

    const nonce = new Date(parseInt(user.nonce));
    User.findOne({$and: [{_id:user._id}, {updatedAt : { $lt: nonce}}]})
        .select("_id balance")
        .exec()
        .then(result => {
            console.log(result);
            if(!result) {
                rsp.json({success: false, message: 'Nonce is too low. Someone already did post a transaction!'});
            }else{
                if(parseFloat(result.balance) < parseFloat(coins.amount)) {
                    return rsp.json({success: false, message: 'Insufficient Fund! Please Top-up to continue...'});
                }

                // User.findOneAndUpdate
                User.update({_id:user._id}, {$inc: {balance: 1}}).exec().then(data => {
                    rsp.json(data);
                })
            }
        });

    // User.getUserById(user._id, (err, result) => {
    //     if(err) throw err;


    // });
    // rsp.json({success: false, message: 'Not Valid', coins: coins.amount});
}