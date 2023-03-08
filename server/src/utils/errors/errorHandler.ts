import { NextFunction, Request, Response } from 'express';
import logger from '../logging/logger';
import { GeneralError } from './index';

/**
 * @param  {} err
 * @param  {} req
 * @param  {} res
 * @desc Error handler
 * @access public
 * @function {@link ErrorHandler}
 */
const ErrorHandler = async (err: any, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }

  let code = 500;
  if (err instanceof GeneralError) {
    code = err.getCode();
  }

  const correlationId = req.headers['x-correlation-id'];
  logger.error(err, { correlationId });
  return res.status(code).json({
    correlationId,
    message: err.message,
  });
};
export default ErrorHandler;
