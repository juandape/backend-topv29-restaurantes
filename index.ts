require('dotenv').config();

// import { server } from './app';
const server = require('./app')


function startServer() {
  const PORT = (process.env.PORT) || 3030;

  server.listen(PORT, () => {
    console.info(`Server running 🤖🚀 at http://localhost:${PORT}`);
  });
}

setImmediate(startServer);
module.exports = server;
