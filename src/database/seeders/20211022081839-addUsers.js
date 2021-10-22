'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [
      {
        fullname: 'User Userovich',
        email: 'user-one@mail.com',
        age: 42,
      },
      {
        fullname: 'User Anmuserovich',
        email: 'user-two@mail.com',
        age: 23,
      },
      {
        fullname: 'User Diffrentovich',
        email: 'user-three@mail.com',
        age: 89,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {});
  },
};
