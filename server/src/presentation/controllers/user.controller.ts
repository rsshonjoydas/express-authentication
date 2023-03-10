import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import env from '../../config/app.config';
import sendEmail from '../../config/registerEmail.config';
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
    sendEmail(email, url, 'Verify your email address');

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

/**
 * @param  {} req
 * @param  {} res
 * @desc Login User
 * @access private
 * @route POST /users/login
 * @function {@link login}
 */
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await checkUser(email);
    if (!user) {
      return res.json({ message: 'Invalid credentials' });
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.json({ message: 'Invalid credentials' });
    }

    const refreshToken = await JWTToken.refreshToken({ id: user._id });
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      path: '/users/refresh_token',
      maxAge: 7 * 24 * 60 * 60 * 1000, //* 7 days
    });

    res.json({ message: 'Login Successfully!' });
  } catch (error) {
    res.status(400).json({ message: 'Authentication Failed!' });
  }

  return true;
};

/**
 * @param req
 * @param res
 * @access private
 * @route POST /users/refresh_token
 * @function {@link accessToken}
 */
export const getAccessToken = (req: Request, res: Response) => {
  try {
    const { refreshToken } = req.cookies;
    if (!refreshToken) return res.status(400).json({ message: 'Session expired!' });

    jwt.verify(refreshToken, env.JWT_REFRESH_TOKEN, (err: any, user: any) => {
      if (err) return res.status(400).json({ message: 'Session expired!' });

      const accessToken = JWTToken.accessToken({ id: user.id });
      return res.json({ accessToken });
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }

  return true;
};

/**
 * @param req
 * @param res
 * @access private
 * @route POST /users/forgot
 * @function {@link forgotPassword}
 */
export const forgotPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const user = await checkUser(email);
    if (!user) return res.status(400).json({ message: 'This email does not exist!' });

    const accessToken = await JWTToken.accessToken({ id: user._id });
    const url = `${env.CLIENT_APP_URL}/users/${accessToken}`;

    sendEmail(email, url, 'Reset your password!');
    res.json({ message: 'Reset the password, please check your email.' });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }

  return true;
};
