const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  startLocation: { type: Object, required: true },
  endLocation: { type: Object, required: false },
  fare: { type: Number },
});

module.exports = mongoose.model('Ride', rideSchema);
