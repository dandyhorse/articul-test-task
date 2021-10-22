'use strict';

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const { userController } = require('../controllers');
const { newLogger } = require('../utils');

router.use([jsonParser]);

router.post('/createUser', userController.createUser);

// router.post('/signin', userController.signIn);

// router.get('/:id(\\d+)', [verifyJWT], userController.getUserDetail);

module.exports = router;
