const userCreateRules = {
  name: 'string|required',
  email: 'email|required',
  age: 'integer|required',
};

module.exports = {
  userCreateRules,
};
