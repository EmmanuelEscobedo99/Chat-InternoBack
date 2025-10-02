const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Chat = sequelize.define('Chat', {
  title: { type: DataTypes.STRING, allowNull: true }, // para grupos
  type: { type: DataTypes.ENUM('direct','group'), defaultValue: 'direct' }
});

module.exports = Chat;
