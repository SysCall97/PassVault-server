const jwt = require('jsonwebtoken');
const msg = require('../consts/messages');
const userService = require('../services/user.service');

module.exports.authenticate = async (req, res, next) => {
    try {
        const token = req.headers.token;
        const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);

        const blackListed = await userService.isBlackListed(token);
        
        if (!!blackListed) {
            res.status(401).json({ message: msg.UNAUTHORIZED_USER });
        } else {
            req.body.email = decodedToken.email;
            next();
        }
    } catch (error) {
        res.status(401).json({ message: msg.UNAUTHORIZED_USER });
    }
}