const validator = require('validator');

// Register input validation
const validateRegisterInput = (data) => {
  const errors = {};

  if (validator.isEmpty(data.name)) {
    errors.name = 'Name is required';
  }

  if (validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  } else if (!validator.isEmail(data.email)) {
    errors.email = 'Invalid email format';
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

// Login input validation
const validateLoginInput = (data) => {
  const errors = {};

  if (validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  } else if (!validator.isEmail(data.email)) {
    errors.email = 'Invalid email format';
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

module.exports = { validateRegisterInput, validateLoginInput };
