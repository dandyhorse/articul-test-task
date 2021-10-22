'use strict';

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const { userController } = require('../controllers');
const { logger } = require('../utils');

router.use([jsonParser, logger]);

router.get(userController.getUserList);

router.get('/:id(\\d+)', userController.getUserById);

router.post(userController.createUser);

router.put('/:id(\\d+)', userController.updateUserById);

router.delete('/:id(\\d+)', userController.deleteUserById);

module.exports = router;
