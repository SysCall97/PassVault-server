const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const blackListSchema = new mongoose.Schema({
    token: {
        type: String,
        trim: true,
        unique: true
    },
    createdAt: { 
        type: Date, 
        default: Date.now, 
        expires: process.env.JWT_EXPIRE_MINUTE * 60
    }
});

module.exports = mongoose.model('blackList', blackListSchema);