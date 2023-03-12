import dotenv from 'dotenv';

dotenv.config();

const env = {
  // ! App environment variables
  NODE_ENV: process.env.NODE_ENV || 'development',
  APP_PORT: process.env.APP_PORT || 5000,
  CLIENT_APP_URL: process.env.CLIENT_APP_URL || 'http://localhost:3000',

  // ! Database connection
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017',
  REDIS_URL: process.env.REDIS_URL || 'redis://localhost:6379',

  SESSION_SECRET: process.env.SESSION_SECRET || 'rsshonjoydas',

  // ? OAuth2 authentication token configuration
  MAIL_SEND_CLIENT_ID: process.env.MAIL_SEND_CLIENT_ID,
  MAIL_SEND_CLIENT_SECRET: process.env.MAIL_SEND_CLIENT_SECRET,
  MAIL_REFRESH_TOKEN: process.env.MAIL_REFRESH_TOKEN,
  EMAIL_ADDRESS: process.env.EMAIL_ADDRESS,

  // ? jwt authentication token configuration
  JWT_ACTIVATION_TOKEN: process.env.JWT_ACTIVATION_TOKEN || 'rsshonjoydas',
  JWT_ACTIVATION_TOKEN_EXPIRE: process.env.JWT_ACTIVATION_TOKEN_EXPIRE,
  JWT_ACCESS_TOKEN: process.env.JWT_ACCESS_TOKEN || 'rsshonjoydas',
  JWT_ACCESS_TOKEN_EXPIRE: process.env.JWT_ACCESS_TOKEN_EXPIRE,
  JWT_REFRESH_TOKEN: process.env.JWT_REFRESH_TOKEN || 'rsshonjoydas',
  JWT_REFRESH_TOKEN_EXPIRE: process.env.JWT_REFRESH_TOKEN_EXPIRE,

  // ? Cloudinary API configuration
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
};

export default env;
