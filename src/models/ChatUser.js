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
    type: DataTypes.STRING, 
  }
}, {
  timestamps: true
});

module.exports = ChatUser;
