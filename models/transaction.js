const mongoose = require('mongoose');

const transSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user_id: { type:mongoose.Schema.Types.ObjectId, require: true}
    
});

const Transaction = module.exports = mongoose.model('Transaction', transSchema);