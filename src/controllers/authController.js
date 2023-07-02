const bcrypt = require('bcrypt');
const jwt = require('../config/jwt');
const Driver = require('../models/Driver');
const { validateRegisterInput, validateLoginInput } = require('../utils/validators');
const { handleError } = require('../utils/errorHandlers');

// Driver registration
const registerDriver = async (req, res) => {
  try {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
      return res.status(400).json({ errors });
    }

    const { name, email, password } = req.body;

    const existingDriver = await Driver.findOne({ email });
    if (existingDriver) {
      errors.email = 'Email already exists';
      return res.status(400).json({ errors });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newDriver = new Driver({ name, email, password: hashedPassword });
    await newDriver.save();

    res.status(201).json({ message: 'Driver registered successfully' });
  } catch (error) {
    handleError(res, error);
  }
};

// Driver login
const loginDriver = async (req, res) => {
  try {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
      return res.status(400).json({ errors });
    }

    const { email, password } = req.body;

    const driver = await Driver.findOne({ email });
    if (!driver) {
      errors.email = 'Driver not found';
      return res.status(404).json({ errors });
    }

    const isPasswordValid = await bcrypt.compare(password, driver.password);
    if (!isPasswordValid) {
      errors.password = 'Incorrect password';
      return res.status(400).json({ errors });
    }

    const token = jwt.generateToken({ id: driver._id });
    res.json({ token });
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { registerDriver, loginDriver };
