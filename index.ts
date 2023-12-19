require('dotenv').config();
const server = require('./server').default;

function startServer() {
  const PORT = (process.env.PORT) || 3030;

  server.listen(PORT, () => {
    console.info(`Server running 🤖🚀 at http://localhost:${PORT}`);
  });
}

setImmediate(startServer);
export default server;
