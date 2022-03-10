import mongoose from "mongoose";
import env from "./config";
import logger from "./logger";

// ? MongoDB localhost URI
const uri = `mongodb://${env.MONGODB_HOST}:${env.MONGODB_PORT}/${env.MONGODB_NAME}`;

// ? MongoDB Remote server URI
// const uri = `mongodb+srv://${env.MONGODB_USER_NAME}:${env.MONGODB_PASSWORD}@cluster0.ifkes.mongodb.net/${env.MONGODB_DATABASE_NAME}?retryWrites=true&w=majority`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 1000,
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};

export const connectDBWithRetry = async () => {
  try {
    await mongoose.connect(uri, options);
    logger.info("Successfully connected to Database");
  } catch (error) {
    logger.error(error);
    setTimeout(connectDBWithRetry, 5000);
  }
};
