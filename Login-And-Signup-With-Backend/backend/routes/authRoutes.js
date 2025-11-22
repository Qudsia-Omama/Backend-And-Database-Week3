import express from 'express';
import { signup, login, getMe } from '../controllers/authController.js';
import { validateSignup, validateLogin, handleValidationErrors } from '../middleware/validation.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.post('/signup', validateSignup, handleValidationErrors, signup);
router.post('/login', validateLogin, handleValidationErrors, login);

// Protected routes
router.get('/me', protect, getMe);

export default router;