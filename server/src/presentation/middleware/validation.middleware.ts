import { NextFunction, Request, Response } from 'express';
import { BadRequest } from '../../utils/errors';

/**
 * @param  {} validate
 * @param  {} =>(req
 * @param  {} next
 * @desc validation handler
 * @access public
 * @function {@link handleValidation}
 */
export const handleValidation =
  (validate: any) => (req: Request, res: Response, next: NextFunction) => {
    const result = validate(req.body);
    const isValid = result.error == null;
    if (isValid) {
      return next();
    }

    const { details } = result.error;
    const messages = details.map((e: any) => e.message);
    const msg = messages.join(', ');
    throw new BadRequest(msg);
  };
