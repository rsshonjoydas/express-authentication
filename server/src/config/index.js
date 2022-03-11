import dotenv from "dotenv";

dotenv.config();

const env = {
  APP_URL: process.env.APP_URL || "http://localhost:3000",
  APP_PORT: process.env.APP_PORT || 5000,
  APP_ENV: process.env.APP_ENV || "production",

  // ? MongoDB localhost connection configuration
  MONGODB_HOST: process.env.MONGODB_HOST || "localhost",
  MONGODB_PORT: process.env.MONGODB_PORT || 27017,
  MONGODB_NAME: process.env.MONGODB_NAME || "test",
  MONGODB_URI: process.env.MONGODB_URI,

  // ? MongoDB Remote server connection configuration
  MONGODB_USER_NAME: process.env.MONGODB_USER_NAME,
  MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
  MONGODB_DATABASE_NAME: process.env.MONGODB_DATABASE_NAME,

  // ? OAuth2 authentication token configuration
  MAIL_SEND_CLIENT_ID: process.env.MAIL_SEND_CLIENT_ID,
  MAIL_SEND_CLIENT_SECRET: process.env.MAIL_SEND_CLIENT_SECRET,
  MAIL_REFRESH_TOKEN: process.env.MAIL_REFRESH_TOKEN,
  EMAIL_ADDRESS: process.env.EMAIL_ADDRESS,

  // ? jwt authentication token configuration
  JWT_ACTIVATION_TOKEN: process.env.JWT_ACTIVATION_TOKEN,
  JWT_ACTIVATION_TOKEN_EXPIRE: process.env.JWT_ACTIVATION_TOKEN_EXPIRE,
  JWT_ACCESS_TOKEN: process.env.JWT_ACCESS_TOKEN,
  JWT_ACCESS_TOKEN_EXPIRE: process.env.JWT_ACCESS_TOKEN_EXPIRE,
  JWT_REFRESH_TOKEN: process.env.JWT_REFRESH_TOKEN,
  JWT_REFRESH_TOKEN_EXPIRE: process.env.JWT_REFRESH_TOKEN_EXPIRE,
};

export default env;
