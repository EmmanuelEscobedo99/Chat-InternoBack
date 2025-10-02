const { DataTypes } = require("sequelize");
const sequelize = require('../config/database');

const Message = sequelize.define('Message', {
  text: { type: DataTypes.TEXT, allowNull: true },
  attachment: { type: DataTypes.STRING, allowNull: true } // url del archivo
});

module.exports = Message;