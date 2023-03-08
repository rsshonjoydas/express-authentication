import app from './app';
import env from './config/app.config';
import { connectDBWithRetry } from './config/database.config';
import logger from './utils/logging/logger';

const PORT = env.APP_PORT;

app.listen(PORT, async () => {
  // ? MongoDB connection
  await connectDBWithRetry();

  logger.info(`Server connected to http://localhost:${PORT}`);
});
