import app from "./app";
import env from "./config";
import logger from "./logger";
import { connectDBWithRetry } from "./mongodb";

const { APP_PORT } = env;

app.listen(APP_PORT, async () => {
  await connectDBWithRetry();
  logger.info(`App listening on port ${APP_PORT}`);
});
