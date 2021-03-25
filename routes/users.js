const router = require("express").Router();
const userController = require('../controllers/user.controller');

router.post('/signin', userController.signin);

router.get('/login', userController.login);

router.get('/logout', userController.logout);

module.exports = router;