import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import env from "./config";
import { handleError, processRequest } from "./middlewares";

const pino = require("pino-http")();

// ? Express JS Configuration
const app = express();

// ? cors configuration
let corsOptions = {
  origin: env.CLIENT_APP_URL,
  credentials: true,
  optionsSuccessStatus: 200, // * some legacy browsers (IE11, various SmartTVs) choke on 204
};

// ? express-rate-limit options
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // * 15 minutes
  max: 1000, // * limit each IP to 1000 requests per windowMs
});

// TODO: Necessary Packages
app
  .use(express.json())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(cors(corsOptions))
  .use(compression())
  .use(helmet())
  .use(limiter)
  .use(pino);

// TODO: Correlation Id
app.use(processRequest);

app.get("/", (req, res) => {
  res.send("rs shonjoy");
});

// TODO: Error Handler
app.use(handleError);

export default app;
