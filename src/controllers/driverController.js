const Driver = require('../models/Driver');
const { handleError } = require('../utils/errorHandlers');

// Get all drivers
const getAllDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.json(drivers);
  } catch (error) {
    handleError(res, error);
  }
};

// Get driver by ID
const getDriverById = async (req, res) => {
  try {
    const driver = await Driver.findById(req.params.id);
    if (!driver) {
      return res.status(404).json({ message: 'Driver not found' });
    }
    res.json(driver);
  } catch (error) {
    handleError(res, error);
  }
};

// Create a new driver
const createDriver = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newDriver = new Driver({ name, email, password });
    await newDriver.save();
    res.status(201).json(newDriver);
  } catch (error) {
    handleError(res, error);
  }
};

// Update driver by ID
const updateDriver = async (req, res) => {
  try {
    const driver = await Driver.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!driver) {
      return res.status(404).json({ message: 'Driver not found' });
    }
    res.json(driver);
  } catch (error) {
    handleError(res, error);
  }
};

// Delete driver by ID
const deleteDriver = async (req, res) => {
  try {
    const driver = await Driver.findByIdAndDelete(req.params.id);
    if (!driver) {
      return res.status(404).json({ message: 'Driver not found' });
    }
    res.json({ message: 'Driver deleted successfully' });
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { getAllDrivers, getDriverById, createDriver, updateDriver, deleteDriver };
