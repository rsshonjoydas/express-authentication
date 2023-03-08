import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import env from '../../config/app.config';
import registerEmail from '../../config/registerEmail.config';
import User from '../../domain/models/user.model';
import { checkUser } from '../../domain/services/user.service';
import JWTToken from '../../utils/token/JWTToken';
import { UserActivate } from '../types/user.types';

/**
 * @param  {} req
 * @param  {} res
 * @desc Register new user
 * @route POST /users/register
 * @access public
 * @function {@link register}
 */
export const register = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const userExists = await checkUser(email);
    if (userExists) {
      return res.status(400).json({ message: 'This email already exists!' });
    }

    // ? Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // ? save user to database
    const newUser = { firstName, lastName, email, password: hashPassword };

    const activationToken = JWTToken.activationToken(newUser);

    const url = `${env.CLIENT_APP_URL}/user/activate/${activationToken}`;
    registerEmail(email, url, 'Verify your email address');

    res.json({ message: 'Verify your email address!' });
  } catch (error) {
    res.status(400).json({ message: 'Authentication Failed!' });
  }
  return true;
};

/**
 * @param  {} req
 * @param  {} res
 * @desc Email verify
 * @route POST /users/activate
 * @access private
 * @function {@link activateEmail}
 */

export const activateEmail = async (req: Request, res: Response) => {
  try {
    const { activationToken } = req.body;
    const user = jwt.verify(activationToken, env.JWT_ACTIVATION_TOKEN) as UserActivate;

    const { firstName, lastName, email, password } = user;

    const userExists = await checkUser(email);
    if (userExists) {
      return res.status(400).json({ message: 'This email already exists!' });
    }

    const newUser = new User({ firstName, lastName, email, password });

    await newUser.save();

    res.json({ message: 'Email Verified!' });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
  return true;
};
