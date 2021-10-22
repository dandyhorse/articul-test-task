const { Sequelize, DataTypes } = require('sequelize');
const { dbconn } = require('../config/config');
const databaseConnection = new Sequelize(dbconn);

module.exports = {
  databaseConnection,
  DataTypes,
};
