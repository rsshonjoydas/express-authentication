import express, { Application } from 'express';
import userRoutes from './user.routes';

const router = express.Router();

router.use('/users', userRoutes);

const routes = (app: Application) => {
  app.use(router);
};

export default routes;
