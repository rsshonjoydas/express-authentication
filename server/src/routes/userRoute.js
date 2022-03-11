import express from "express";
import { activateEmail, register, login } from "../controllers/userController";
import { handleValidation } from "../middlewares";
import validators from "../models/request-models";

const router = express.Router();

router
  .post("/register", handleValidation(validators.userSchemaValidate), register)
  .post("/verify", activateEmail)
  .post("/login", login);

export default router;
