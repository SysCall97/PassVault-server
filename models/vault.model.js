const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const vaultSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true
    },
    siteLink: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    }
});

module.exports = mongoose.model('vault', vaultSchema);