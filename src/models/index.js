const sequelize = require('../config/database');
const User = require('./User');
const Chat = require('./Chat');
const ChatUser = require('./ChatUser');
const Message = require('./Message');

// Relaciones
User.belongsToMany(Chat, { through: ChatUser });
Chat.belongsToMany(User, { through: ChatUser });

Chat.hasMany(Message);
Message.belongsTo(Chat);

User.hasMany(Message);
Message.belongsTo(User);


module.exports = { sequelize, User, Chat, ChatUser, Message };