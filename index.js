const http = require('http');
const app = require('./src/app');
const { sequelize } = require('./src/models/index');
require('dotenv').config();

const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: { origin: '*' }
});

require('./src/sockets/index')(io);

const PORT = process.env.PORT || 4000;

async function main() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true }); 

    server.listen(PORT, "0.0.0.0", () =>
      console.log(`Server ok on http://0.0.0.0:${PORT}`)
    );
  } catch (err) {
    console.error(err);
  }
}


main();
