import express from 'express';
import { register } from '../controllers/user.controller';

import { handleValidation } from '../middleware/validation.middleware';
import userValidation from '../validation/user.validation';

const router = express.Router();

router.post('/register', handleValidation(userValidation), register);

export default router;