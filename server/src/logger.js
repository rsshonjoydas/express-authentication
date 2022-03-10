import dayjs from "dayjs";
import pino from "pino";
import pretty from "pino-pretty";

const stream = pretty({
  colorize: true,
});

const logger = pino(
  {
    base: {
      pid: false,
    },
    timestamp: () => `,"time":"${dayjs().format("DD MMMM YYYY, hh:mm:ss A")}"`,
  },
  stream
);

export default logger;
