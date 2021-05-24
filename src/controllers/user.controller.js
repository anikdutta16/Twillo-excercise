const httpStatus = require('http-status');
const CustomApiError = require('../utils/CustomApiError');
const asyncCatch = require('../utils/asyncCatch');
const { userService } = require('../services');

const getUser = asyncCatch(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  if (!user) {
    throw new CustomApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
});

module.exports = {
  getUser,
};
