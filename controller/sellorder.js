const mongoose = require('mongoose');
const Transaction = require('../models/transaction');
const User = require('../models/user');

module.exports.billspay = (req, rsp, next) => {
    console.log(req.user);
    const user = req.body.user;
    const coins = req.body.coins;

    const nonce = new Date(parseInt(user.nonce));
    // const nonce = new Date().getTime();
    User.findOneAndUpdate(
        {$and: [{_id:user._id}, {updatedAt : { $lt: nonce}}]}, // Query Params
        {$inc: {__v:0.01, "balance.locked": parseFloat(coins.amount)}}, // fields to be update
        {new:false}, (err, dt) => { // promised
            if(err) return rsp.json({success: false, message: 'Syntax Error!', error: err});
            if(!dt) return rsp.json({success: false, message: 'Nonce is too low. please generate a new one!'});
            if(!((dt.balance.current-dt.balance.locked) > coins.amount)) return rsp.json({success: false, message: 'Insufficient Fund! Please Top-up to continue...'});;
            
            const newTrans = new Transaction({
                _id: new mongoose.Types.ObjectId(),
                user: dt._id,
                amount: coins.amount,
                fields: coins,
                payload: coins,
                type: 'bills_payment'
            });

            newTrans.save((err, result) => {
                if(err) return rsp.json({error:err});
                Transaction.findById(result._id)
                    .populate('user','fullname')
                    .exec((err,data) => {
                        if(err) return rsp.json(err);
                        rsp.json({success: true, data: data});
                    });
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