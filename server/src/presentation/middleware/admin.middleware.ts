import { NextFunction, Request, Response } from 'express';
import User from '../../domain/models/user.model';

/**
 * @description Middleware function to authenticate user's access using JSON Web Tokens
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function
 * @returns True if authentication is successful, otherwise returns an error response
 * @function {@link authAdmin}
 */
const authAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // ? Check if req.user is defined before using it in the query
    if (!req.user) {
      return res.status(401).json({ message: 'Invalid Authentication' });
    }
    const user: any = await User.findOne({ _id: req.user.id });

    if (user.role !== 1) return res.status(500).json({ message: 'Access denied to admin! ' });

    return next();
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export default authAdmin;
