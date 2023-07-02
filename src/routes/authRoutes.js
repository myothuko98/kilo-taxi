const express = require('express');
const { registerDriver, loginDriver } = require('../controllers/authController');

const router = express.Router();

router.post('/register', registerDriver);
router.post('/login', loginDriver);

module.exports = router;
