/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */

import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import env from '../../config/app.config';

// ? Extend the Request interface to add the user property
declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

/**
 * @description Middleware function to authenticate user's access using JSON Web Tokens
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function
 * @returns True if authentication is successful, otherwise returns an error response
 * @function {@link auth}
 */
const auth = (req: Request, res: Response, next: NextFunction): boolean | Response => {
  try {
    const token = req.header('Authorization');

    if (!token) {
      return res.status(400).json({ message: 'Invalid Authentication' });
    }

    jwt.verify(token, env.JWT_ACCESS_TOKEN, (err: any, user: any) => {
      if (err) {
        return res.status(err.status || 401).json({ message: 'Invalid Authentication' });
      }

      req.user = user;
      return next();
    });

    return true;
  } catch (error: unknown) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

export default auth;
