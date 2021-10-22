'use strict';

const { User } = require('../models');
const Validator = require('validatorjs');
const { rules } = require('../utils/index');

async function createUser(req, res) {
  try {
    const requestData = req.body;

    validateData(requestData, rules.userCreateRules);

    await checkAlreadyExistEmail(requestData.email);

    const createdUser = await User.create(requestData);

    const result = { id: createdUser.id };

    res.status(200).send(result);
  } catch (error) {
    res.status(404).send(error);
  }
}

async function getUserList(req, res) {
  try {
    const result = await User.findAll();

    res.status(200).send(result);
  } catch (error) {
    res.sendStatus(404);
  }
}

async function getUserById(req, res) {
  try {
    const userId = parseInt(req.params.id);

    const user = await User.findOne({ where: { id: userId } });

    if (!user) throw { errorMessage: 'user not found' };

    res.status(200).send(user);
  } catch (error) {
    res.status(404).send(error);
  }
}

async function updateUserById(req, res) {
  try {
    const userId = parseInt(req.params.id);

    // Potential non-secure endpoint, if user not exist and we return 'Email mus be unique' before that:
    await isExistUser(userId);

    const requestData = req.body;

    validateData(requestData, rules.userUpdateRules);

    if (requestData.email) {
      await checkAlreadyExistEmail(requestData.email);
    }

    await User.update({ ...requestData }, { where: { id: userId } });

    res.status(200).send({ message: 'User succesfully updated' });
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
}

async function deleteUserById(req, res) {
  try {
    const userId = parseInt(req.params.id);

    const result = await User.destroy({ where: { id: userId } });

    if (result < 1) throw { errorMessage: 'user not found' };

    res.status(200).send({ message: 'User succesfully deleted' });
  } catch (error) {
    res.status(404).send(error);
  }
}

async function checkAlreadyExistEmail(email) {
  const alreadyExistUser = await User.findOne({ where: { email } });

  if (alreadyExistUser) throw { errorMessage: 'email must be unique' };
}

async function isExistUser(id) {
  const user = await User.findOne({ where: { id } });

  if (!user) throw { errorMessage: 'user not found' };
}

function validateData(data, rules) {
  const validation = new Validator(data, rules);

  if (validation.fails()) throw { errorMessage: validation.errors.all() };
}

module.exports = {
  getUserList,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
