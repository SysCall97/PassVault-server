const tokenBlackListModel = require('../models/tokenBlackList.model');
const userModel = require('../models/user.model');

const userService = {};

userService.signin = (user) => {
    return userModel.create(user);
}

userService.login = ({ email, password }) => {
    return userModel.findOne({ email: email, password: password });
}

userService.logout = (token) => {
    return tokenBlackListModel.create({ token });
}

userService.isBlackListed = (token) => {
    return tokenBlackListModel.findOne({ token: token });
}

module.exports = userService;