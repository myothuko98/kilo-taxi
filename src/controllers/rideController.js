const Ride = require('../models/Ride');
const { handleError } = require('../utils/errorHandlers');

// Get all rides
const getAllRides = async (req, res) => {
  try {
    const rides = await Ride.find();
    res.json(rides);
  } catch (error) {
    handleError(res, error);
  }
};

// Get ride by ID
const getRideById = async (req, res) => {
  try {
    const ride = await Ride.findById(req.params.id);
    if (!ride) {
      return res.status(404).json({ message: 'Ride not found' });
    }
    res.json(ride);
  } catch (error) {
    handleError(res, error);
  }
};

// Create a new ride
const createRide = async (req, res) => {
  try {
    const { startLocation, endLocation } = req.body;
    const newRide = new Ride({ startLocation, endLocation });
    await newRide.save();
    res.status(201).json(newRide);
  } catch (error) {
    handleError(res, error);
  }
};

// Update ride by ID
const updateRide = async (req, res) => {
  try {
    const ride = await Ride.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ride) {
      return res.status(404).json({ message: 'Ride not found' });
    }
    res.json(ride);
  } catch (error) {
    handleError(res, error);
  }
};

// Delete ride by ID
const deleteRide = async (req, res) => {
  try {
    const ride = await Ride.findByIdAndDelete(req.params.id);
    if (!ride) {
      return res.status(404).json({ message: 'Ride not found' });
    }
    res.json({ message: 'Ride deleted successfully' });
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { getAllRides, getRideById, createRide, updateRide, deleteRide };
