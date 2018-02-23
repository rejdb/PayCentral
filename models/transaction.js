const mongoose = require('mongoose');

const transSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    amount: { type: Number, required: true },
    fields: mongoose.Schema.Types.Mixed,
    payload: mongoose.Schema.Types.Mixed,
    type: { type: String, required: true }
}, {timestamps: { createdAt: 'created_at' }});

const Transaction = module.exports = mongoose.model('Transaction', transSchema);

module.exports.getAllTrans = (user_id, page, limit, callback) => {
    const query = (!user_id) ? {}: {user: user_id};
    Transaction.find(query).populate('user', 'fullname')
        .limit(limit)
        .skip(limit * (page-1))
        .exec(callback);
}