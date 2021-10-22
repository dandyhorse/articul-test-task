'use strict';

const { User } = require('../models');
const Validator = require('validatorjs');
const { rules } = require('../utils/index');

async function createUser(req, res) {
  let result;

  const requestData = req.body;

  const validation = new Validator(requestData, rules.userCreateRules);

  if (validation.fails()) {
    res.status(404).send({ errorMessage: validation.errors.all() });
  }

  try {    
    const createdUser = await User.create(requestData);

    result = { id: createdUser.id };

    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
}

module.exports = {
  createUser,
};
