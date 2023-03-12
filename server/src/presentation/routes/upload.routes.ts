import express from 'express';
import { uploadAvatar } from '../controllers/upload.controller';

import auth from '../middleware/auth.middleware';
import uploadImage from '../middleware/uploadImage.middleware';

const router = express.Router();

router.post('/upload_avatar', auth, uploadImage, uploadAvatar);

export default router;
