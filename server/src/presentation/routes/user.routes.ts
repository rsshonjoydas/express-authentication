import express from 'express';
import { activateEmail, register } from '../controllers/user.controller';

import { handleValidation } from '../middleware/validation.middleware';
import userValidation from '../validation/user.validation';

const router = express.Router();

router
  .post('/register', handleValidation(userValidation), register)
  .post('/activate', activateEmail);

export default router;
