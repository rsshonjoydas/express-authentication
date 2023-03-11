import express from 'express';
import {
  activateEmail,
  forgotPassword,
  getAccessToken,
  getAllUserInfo,
  getUserInfo,
  login,
  register,
  resetPassword,
} from '../controllers/user.controller';
import authAdmin from '../middleware/admin.middleware';

import auth from '../middleware/auth.middleware';

import { handleValidation } from '../middleware/validation.middleware';
import userValidation from '../validation/user.validation';

const router = express.Router();

router
  .post('/register', handleValidation(userValidation), register)
  .post('/activate', activateEmail)
  .post('/login', login)
  .post('/refresh_token', getAccessToken)
  .post('/forgot', forgotPassword)
  .post('/reset', auth, resetPassword)
  .get('/info', auth, getUserInfo)
  .get('/all_info', auth, authAdmin, getAllUserInfo);

export default router;
