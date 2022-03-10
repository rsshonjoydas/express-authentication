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
};

export default env;
