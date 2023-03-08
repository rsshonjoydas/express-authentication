import jwt, { SignOptions } from 'jsonwebtoken';
import env from '../../config/app.config';

type Payload = Record<string, any>;

const activationToken = (payload: Payload): string =>
  jwt.sign(payload, env.JWT_ACTIVATION_TOKEN, {
    expiresIn: env.JWT_ACTIVATION_TOKEN_EXPIRE,
  } as SignOptions);

const accessToken = (payload: Payload): string =>
  jwt.sign(payload, env.JWT_ACCESS_TOKEN, {
    expiresIn: env.JWT_ACCESS_TOKEN_EXPIRE,
  } as SignOptions);

const refreshToken = (payload: Payload): string =>
  jwt.sign(payload, env.JWT_REFRESH_TOKEN, {
    expiresIn: env.JWT_REFRESH_TOKEN_EXPIRE,
  } as SignOptions);

export default { activationToken, accessToken, refreshToken };
