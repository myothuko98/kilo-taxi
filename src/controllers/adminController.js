const Calculation = require('../models/Calculation');
const { handleError } = require('../utils/errorHandlers');

// Get calculation formula
const getCalculationFormula = async (req, res) => {
  try {
    const calculation = await Calculation.findOne();
    if (!calculation) {
      return res.status(404).json({ message: 'Calculation formula not found' });
    }
    res.json(calculation);
  } catch (error) {
    handleError(res, error);
  }
};

// Update calculation formula
const updateCalculationFormula = async (req, res) => {
  try {
    const calculation = await Calculation.findOneAndUpdate({}, req.body, { new: true, upsert: true });
    res.json(calculation);
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { getCalculationFormula, updateCalculationFormula };
