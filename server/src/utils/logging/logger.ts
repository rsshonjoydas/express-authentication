import dayjs from 'dayjs';
import pino from 'pino';
import PinoPretty from 'pino-pretty';

const stream = PinoPretty({
  colorize: true,
});

const logger = pino(
  {
    base: {
      pid: false,
    },
    timestamp: () => `,"time":"${dayjs().format('DD-MM-YYYY HH:mm:ss A')}"`,
  },
  stream
);

export default logger;
