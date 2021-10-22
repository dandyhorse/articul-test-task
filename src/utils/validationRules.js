const userCreateRules = {
  name: 'string|required',
  email: 'email|required',
  age: 'integer|required',
};

const userUpdateRules = {
  name: 'string',
  email: 'email',
  age: 'integer',
};

module.exports = {
  userCreateRules,
  userUpdateRules,
};
