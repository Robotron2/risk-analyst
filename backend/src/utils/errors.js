class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  // Specific Error Handling
  if (err.name === 'ValidationError') {
    err.statusCode = 400;
    err.message = Object.values(err.errors).map(val => val.message).join(', ');
  } else if (err.code === 11000) {
    err.statusCode = 400;
    err.message = 'Duplicate field value entered';
  }

  res.status(err.statusCode).json({
    error: true,
    message: err.message || 'Internal Server Error'
  });
};

module.exports = {
  AppError,
  errorHandler
};
