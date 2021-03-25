const userService = require("../services/user.service");
const hash = require('crypto');
const jwt = require('jsonwebtoken');
const msg = require("../consts/messages");

const userController = {};

userController.signin = async (req, res) => {
    try {
        const email = req.body.email;
        const password = await hash.createHash('md5').update(req.body.password).digest('hex');
        const user = await userService.signin({ email, password });
        const token = await jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE_MINUTE * 60 });

        return res.status(200).json({ token });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
}

userController.login = async (req, res) => {
    try {
        const email = req.body.email;
        const password = await hash.createHash('md5').update(req.body.password).digest('hex');
        const user = await userService.login({ email, password });
        const token = await jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE_MINUTE * 60 });

        return res.status(200).json({ token });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
}

userController.logout = async (req, res) => {
    try {
        const user = await userService.logout(req.headers.token);
        return res.status(200).json({ message: msg.LOGOUT_SUCCESSFULL });
    } catch (e) {
        return res.status(500).json({ message: msg.ALREADY_LOGGED_OUT });
    }
}

module.exports = userController;