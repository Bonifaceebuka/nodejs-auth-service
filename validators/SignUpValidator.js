const { check, validationResult } = require('express-validator');

const signUpValidationRules = [
  check('email')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Email is required!')
    .isEmail()
    .withMessage('Email must be a valid email address!'),
  check('password')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Password is required!')
];

const signUpValidationErrors = (req, res, next) => {
  const result = validationResult(req).array();
  if (result && result.length === 0) 
  {
    return next()
  }
  else{
      const error = result[0].msg;
      res.status(422).json({ success: false, message: error });
  }
}

module.exports = {
    signUpValidationErrors,
    signUpValidationRules
}