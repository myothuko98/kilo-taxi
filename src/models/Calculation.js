const mongoose = require('mongoose');

const calculationSchema = new mongoose.Schema({
  distanceRate: { type: Number, required: true },
  initialCharge: { type: Number, required: true },
  waitingTimeRate: { type: Number, required: true },
  extraCharge: { type: Number, required: true },
});

module.exports = mongoose.model('Calculation', calculationSchema);
