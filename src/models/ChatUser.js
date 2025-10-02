// models/ChatUser.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ChatUser = sequelize.define('ChatUser', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  role: {
    type: DataTypes.STRING, // si quieres roles como admin, miembro, etc
    allowNull: true
  }
}, {
  timestamps: true
});

module.exports = ChatUser;
