import dayjs from 'dayjs';
import { NextFunction, Request, Response } from 'express';

/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 * @desc process request handler
 * @access public
 * @function {@link setCorrelationIdHeader }
 */
export const setCorrelationIdHeader = async (req: Request, res: Response, next: NextFunction) => {
  let correlation = req.headers['x-correlation-id'];
  if (!correlation) {
    correlation = dayjs().format('DD MMMM YYYY, hh:mm:ss A').toString();
    req.headers['x-correlation-id'] = correlation;
  }
  res.set('x-correlation-id', correlation);
  return next();
};
