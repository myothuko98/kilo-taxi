const jwt = require('jsonwebtoken');
const { handleError } = require('../utils/errorHandlers');

// Authentication middleware
const authenticate = (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.driverId = decoded.id;
    next();
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = authenticate;
