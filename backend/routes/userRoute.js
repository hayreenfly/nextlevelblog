import express from 'express';
import { protect, admin } from '../middlewares/authMiddleware.js';
const router = express.Router();

import {
  signup,
  signin,
  getUserProfile,
} from '../controllers/userController.js';

// Import Validators
import { runValidation } from '../validators/index.js';
import {
  userSignUpValidator,
  userSignInValidator,
} from '../validators/auth.js';

router.route('/signup').post(userSignUpValidator, runValidation, signup);
router.route('/signin').post(userSignInValidator, runValidation, signin);
router.route('/profile').get(protect, getUserProfile);

export default router;
