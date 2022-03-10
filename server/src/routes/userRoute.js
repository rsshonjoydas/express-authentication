import express from "express";
import { register } from "../controllers/userController";
import { handleValidation } from "../middlewares";
import validators from "../models/request-models";

const router = express.Router();

router.post("/register", handleValidation(validators.userSchemaValidate), register);

export default router;
