import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import env from '../../config/app.config';
import registerEmail from '../../config/registerEmail.config';
import { checkUser } from '../../domain/services/user.service';
import JWTToken from '../../utils/token/JWTToken';

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
