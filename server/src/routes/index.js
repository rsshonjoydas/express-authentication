import express from "express";
import userRoutes from "./userRoute";

const router = express.Router();

router.use("/auth", userRoutes);

const configure = (app) => {
  app.use(router);
};

export default configure;
