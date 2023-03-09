import express from 'express';
import { activateEmail, login, register } from '../controllers/user.controller';

import { handleValidation } from '../middleware/validation.middleware';
import userValidation from '../validation/user.validation';

const router = express.Router();

router
  .post('/register', handleValidation(userValidation), register)
  .post('/activate', activateEmail)
  .post('/login', login);

export default router;
