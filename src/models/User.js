// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false }
}, {
  tableName: 'user', // 👈 opcional, así fuerzas el nombre exacto de la tabla
  timestamps: true     // agrega createdAt y updatedAt
});

module.exports = User;
