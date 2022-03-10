import bcrypt from "bcryptjs";
import User from "../models/data-models/user-data-model";
import { checkUser } from "../services/userServices";

/**
 * @param  {} req
 * @param  {} res
 * @desc Register new user
 * @route POST /auth/register
 * @access public
 * @function {@link register}
 */
export const register = async (req, res) => {
  const { firstName, lastName, username, password } = req.body;
  try {
    const userExists = await checkUser(username);
    if (userExists) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // ? Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // ? save user to database

    await User.create({
      firstName,
      lastName,
      username,
      password: hashPassword,
    });

    res.json({ message: "Authentication Successful!" });
  } catch (error) {
    res.status(400).json({ message: "Authentication Failed!" });
  }
  return true;
};
