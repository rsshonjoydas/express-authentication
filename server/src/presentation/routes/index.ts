import express, { Application } from 'express';
import uploadRoutes from './upload.routes';
import userRoutes from './user.routes';

const router = express.Router();

router.use('/users', userRoutes).use('/api', uploadRoutes);

const routes = (app: Application) => {
  app.use(router);
};

export default routes;
