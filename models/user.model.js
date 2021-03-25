const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);