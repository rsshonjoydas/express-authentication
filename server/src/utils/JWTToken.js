import jwt from "jsonwebtoken";
import config from "../config";

const activationToken = (payload) =>
  jwt.sign(payload, config.JWT_ACTIVATION_TOKEN, { expiresIn: config.JWT_ACTIVATION_TOKEN_EXPIRE });

const accessToken = (payload) =>
  jwt.sign(payload, config.JWT_ACCESS_TOKEN, { expiresIn: config.JWT_ACCESS_TOKEN_EXPIRE });

const refreshToken = (payload) =>
  jwt.sign(payload, config.JWT_REFRESH_TOKEN, { expiresIn: config.JWT_REFRESH_TOKEN_EXPIRE });

export default { activationToken, accessToken, refreshToken };
