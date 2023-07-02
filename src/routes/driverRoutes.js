const express = require('express');
const authenticate = require('../middleware/authMiddleware');
const authorizeAdmin = require('../middleware/adminMiddleware');
const {
  getAllDrivers,
  getDriverById,
  createDriver,
  updateDriver,
  deleteDriver,
} = require('../controllers/driverController');

const router = express.Router();

// Public routes
router.get('/', getAllDrivers);
router.get('/:id', getDriverById);

// Admin routes
router.use(authenticate, authorizeAdmin);
router.post('/', createDriver);
router.put('/:id', updateDriver);
router.delete('/:id', deleteDriver);

module.exports = router;
