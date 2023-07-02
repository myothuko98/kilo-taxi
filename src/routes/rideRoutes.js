const express = require('express');
const authenticate = require('../middleware/authMiddleware');
const {
  getAllRides,
  getRideById,
  createRide,
  updateRide,
  deleteRide,
} = require('../controllers/rideController');

const router = express.Router();

router.use(authenticate);
router.get('/', getAllRides);
router.get('/:id', getRideById);
router.post('/', createRide);
router.put('/:id', updateRide);
router.delete('/:id', deleteRide);

module.exports = router;
