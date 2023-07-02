const express = require('express');
const authenticate = require('../middleware/authMiddleware');
const authorizeAdmin = require('../middleware/adminMiddleware');
const {
  getCalculationFormula,
  updateCalculationFormula,
} = require('../controllers/adminController');

const router = express.Router();

router.use(authenticate, authorizeAdmin);
router.get('/calculation', getCalculationFormula);
router.put('/calculation', updateCalculationFormula);

module.exports = router;
