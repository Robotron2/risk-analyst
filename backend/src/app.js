const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const apiRoutes = require('./routes/api');
const { errorHandler, AppError } = require('./utils/errors');

const app = express();

// Security Middlewares
app.use(helmet());

// Enable CORS for all routes
app.use(cors());

// Body parser
app.use(express.json({ limit: '10kb' }));

// API Routes
app.use('/api', apiRoutes);

// Handle undefined routes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

// Global Error Handling Middleware
app.use(errorHandler);

module.exports = app;
