const router = require('express').Router();
const suggestionController = require('../controllers/suggestion.controller');

router.get('/', suggestionController.getPasswords);

module.exports = router;