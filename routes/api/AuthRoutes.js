const express = require('express');
const router = express.Router();
const {
  signUp,
  signIn
} = require('../../controllers/AuthController');

const {
  signUpValidationRules,
  signUpValidationErrors
} = require('../../validators/SignUpValidator');
 
router.post('/signup',signUpValidationRules, signUpValidationErrors, signUp);
router.post('/signin',signUpValidationRules, signUpValidationErrors, signIn);

module.exports = router;