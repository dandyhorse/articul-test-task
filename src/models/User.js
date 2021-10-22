const { databaseConnection, DataTypes } = require('../database/databaseConnection');

const User = databaseConnection.define(
  'User',
  {
    name: { type: DataTypes.STRING(700), allowNull: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    age: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

module.exports = User;
