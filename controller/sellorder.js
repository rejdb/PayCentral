const request = require('request');
const mongoose = require('mongoose');
const Transaction = require('../models/transaction');
const User = require('../models/user');

const provider = require('../helpers/provider.helper');

module.exports.billspay = (req, rsp, next) => {
    if(!req.headers.nonce) return rsp.json({success:false, message: 'Invalid Authorization'});
    const user = req.user;
    const coins = req.body;

    // const nonce = new Date(parseInt(req.headers.nonce));
    const nonce = new Date().getTime();
    
    // Prevent possible double entry and temporarily locked requested amount
    User.findOneAndUpdate(
        {$and: [{_id:user._id}, {updatedAt : { $lt: nonce}}]}, // Query Params
        {$inc: {__v:0.01}}, // fields to be update
        {new:false}, (err, dt) => { // promised
            if(err) return rsp.json({success: false, message: 'Syntax Error!', error: err}); // Block if theres error in the syntax
            if(!dt) return rsp.json({success: false, message: 'Nonce is too low. please generate a new one!'}); // Response if one of the concurrent user tried to up post trans with lower timestamp balance
            if(!((dt.balance.current-dt.balance.locked) > coins.amount)) return rsp.json({success: false, message: 'Insufficient Fund! Please Top-up to continue...'});; 
            
            // Block if balance is lower than the amount to be paid.

            // Connection to the provider
            provider.__post(process.env.sell_order, coins, (err, res, body) => {
                if(err) return rsp.json({error: err}); // Response if something went wrong
                var body = JSON.parse(body); 

                if(!body.success) {
                    User.update({_id: dt._id},{$inc: {'balance.locked': parseFloat(coins.amount)*-1}}).exec();
                    return rsp.json(body);
                }else{
                    const newTrans = new Transaction({
                        _id: new mongoose.Types.ObjectId(),
                        user: dt._id,
                        amount: coins.amount*-1,
                        fields: coins,
                        payload: body,
                        type: 'bills_payment'
                    });

                    newTrans.save((err, result) => {
                        if(err) return rsp.json({error:err});
                        
                        const coinsVal = parseFloat(coins.amount)*-1;
                        User.update({_id:user._id}, 
                            {$inc: {'balance.current': coinsVal, 'balance.locked': coinsVal}}, 
                            (err, updated) => {
                                if(err) return rsp.json({error: err});
                                
                                Transaction.findById(result._id)
                                .populate('user','fullname balance')
                                .exec((err,data) => {
                                    if(err) return rsp.json(err);
                                    rsp.json({success: true, data: data});
                                });
                        });
                    });
                }
            });
    });
}

module.exports.getAllTrans = (req, rsp, next) => {
    const page = parseInt(req.query.page) || 1;
    const per_page = parseInt(req.query.per_page) || 2;
    const user = req.query.user_id || '';

    Transaction.getAllTrans(user, page, per_page, (err, data) => { 
        if(err) return rsp.json({error: err});
        rsp.json(data)
    });
}