const Driver = require('../models/Driver');
const { handleError } = require('../utils/errorHandlers');

// Admin authorization middleware
const authorizeAdmin = async (req, res, next) => {
  try {
    const driver = await Driver.findById(req.driverId);
    if (!driver || !driver.isAdmin) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    next();
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = authorizeAdmin;
