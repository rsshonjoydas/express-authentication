import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import env from "../config";
import DataModels from "../models/data-models";
import { checkUser } from "../services/userServices";
import JWTToken from "../utils/JWTToken";
import sendMail from "./sendMail";

const DataModel = DataModels.User;

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
    const newUser = {
      firstName,
      lastName,
      username,
      password: hashPassword,
    };

    const activationToken = JWTToken.activationToken(newUser);

    const url = `${env.APP_URL}/auth/verify/${activationToken}`;
    sendMail(username, url, "Verify your email address");

    res.json({ message: "Verify your email address!" });
  } catch (error) {
    res.status(400).json({ message: "Authentication Failed!" });
  }
  return true;
};

/**
 * @param  {} req
 * @param  {} res
 * @desc Email verify
 * @route POST /auth/verify
 * @access private
 * @function {@link activateEmail}
 */
export const activateEmail = async (req, res) => {
  try {
    const { activationToken } = req.body;
    const user = jwt.verify(activationToken, env.JWT_ACTIVATION_TOKEN);

    const { firstName, lastName, username, password } = user;

    const newUser = new DataModel({ firstName, lastName, username, password });

    await newUser.save();

    res.json({ message: "Email Verified!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  return true;
};

/**
 * @param  {} req
 * @param  {} res
 * @desc Login User
 * @access private
 * @route POST /auth/login
 * @function {@link login}
 */
export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await checkUser(username);
    const checkPassword = await bcrypt.compare(password, user.password);

    if (user && checkPassword) return res.json({ message: "Login Successfully!" });
    res.json({ message: "Invalid credentials" });
  } catch (error) {
    res.status(400).json({ message: "Authentication Failed!" });
  }
  return true;
};
