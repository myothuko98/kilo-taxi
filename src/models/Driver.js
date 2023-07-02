const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isActivate: {type: Boolean, detault: false},
  loyaltyPoint: {type: Number, default: 0},
});

module.exports = mongoose.model('Driver', driverSchema);
