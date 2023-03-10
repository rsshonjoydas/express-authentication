import express from 'express';
import {
  activateEmail,
  forgotPassword,
  getAccessToken,
  login,
  register,
} from '../controllers/user.controller';
import { handleValidation } from '../middleware/validation.middleware';
import userValidation from '../validation/user.validation';

const router = express.Router();

router
  .post('/register', handleValidation(userValidation), register)
  .post('/activate', activateEmail)
  .post('/login', login)
  .post('/refresh_token', getAccessToken)
  .post('/forgot', forgotPassword);

export default router;
