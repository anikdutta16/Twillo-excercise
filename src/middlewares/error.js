const httpStatus = require('http-status');
const CustomApiError = require('../utils/CustomApiError');

const errorTransformer = (err, req, res, next) => {
  let error = err;
  if (!(error instanceof CustomApiError)) {
    const statusCode = error.statusCode ;
    const message = error.message || httpStatus[statusCode];
    error = new CustomApiError(statusCode, message, false, err.stack);
  }
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let { statusCode, message } = err;

  res.locals.errorMessage = message;

  const response = {
    code: statusCode,
    message,
    stack: err.stack,
  };

  res.status(statusCode).send(response);
};

module.exports = {
  errorTransformer,
  errorHandler,
};
