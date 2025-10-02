const { Message, Chat, User } = require('../models/index');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('socket connected', socket.id);

    // unirme a un chat room: { chatId }
    socket.on('join_chat', ({ chatId }) => {
      socket.join('chat_' + chatId);
    });

    // mandar mensaje: { chatId, userId, text, attachment }
    socket.on('send_message', async (data) => {
      try {
        const msg = await Message.create({
          text: data.text || null,
          attachment: data.attachment || null,
          ChatId: data.chatId,
          UserId: data.userId
        });
        // usuario reciente
        const sender = await User.findByPk(data.userId, { attributes: ['id','name']});
        const out = { id: msg.id, text: msg.text, attachment: msg.attachment, chatId: data.chatId, user: sender, createdAt: msg.createdAt };
        io.to('chat_' + data.chatId).emit('receive_message', out);
      } catch (e) {
        console.error(e);
      }
    });

    socket.on('disconnect', () => {
      console.log('disconnected', socket.id);
    });
  });
};
