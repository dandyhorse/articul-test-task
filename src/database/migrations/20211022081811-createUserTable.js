'use strict';
const { Sequelize, DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('User', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: { type: DataTypes.STRING(700), allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      age: { type: DataTypes.INTEGER, allowNull: false },
      createdAt: { type: DataTypes.DATE, allowNull: false },
      updatedAt: { type: DataTypes.DATE, allowNull: false },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('User');
  },
};
