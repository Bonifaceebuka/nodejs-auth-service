const express = require('express');
const router = express.Router();
const {
  signUp,
  signIn,
  userProfile
} = require('../../controllers/AuthController');

const authMiddleware = require("../../middlewares/ApiAuthMiddleware");

router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/profile', authMiddleware, userProfile);

module.exports = router;