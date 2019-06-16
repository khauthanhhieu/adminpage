const express = require('express');
const router = express.Router();
const userController = require('../../controllers/api/UserController');

router.get('/check', userController.check);

module.exports = router