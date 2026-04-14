require('dotenv').config();
const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');
const { initSocket } = require('./config/socket');

// Ensure error handler for unhandled rejections/exceptions
process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.error(err.name, err.message, err.stack);
  process.exit(1);
});

const DB = process.env.MONGODB_URI;

mongoose
  .connect(DB)
  .then(() => console.log('DB connection successful!'))
  .catch(err => {
    console.error('DB connection failed!', err);
    process.exit(1);
  });

const port = process.env.PORT || 3000;
const server = http.createServer(app);

// Initialize WebSocket
initSocket(server);

server.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
