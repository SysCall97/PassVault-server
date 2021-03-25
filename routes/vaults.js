const router = require('express').Router();
const { authenticate } = require('../middlewares/aunthenticate');
const vaultController = require('../controllers/vault.controller');

router.route('/')
.post(authenticate, vaultController.create)
.get(authenticate, vaultController.getPasswordsByEmail)
.patch(authenticate, vaultController.updatePassword);

module.exports = router;