import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import env from "./config";
import { handleError, processRequest } from "./middlewares";
import routes from "./routes";
import swaggerDocument from "./swagger.json";

const pino = require("pino-http")();

// ? Express JS Configuration
const app = express();

// ? cors configuration
let corsOptions = {
  origin: env.APP_URL,
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

// TODO: Routes Configuration
routes(app);

// TODO: Swagger Configuration
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// TODO: Error Handler
app.use(handleError);

export default app;
