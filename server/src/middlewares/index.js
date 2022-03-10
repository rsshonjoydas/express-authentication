import dayjs from "dayjs";
import ErrorMessage from "../utils/error";

/**
 * @param  {} err
 * @param  {} req
 * @param  {} res
 * @desc Error handler
 * @access public
 * @function {@link handleError}
 */
export const handleError = async (err, req, res) => {
  let code = 500;
  if (err instanceof ErrorMessage.GeneralError) {
    code = err.getCode();
  }

  let correlationId = req.headers["x-correlation-id"];

  return res.status(code).json({
    correlationId,
    message: err.message,
  });
};

/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 * @desc process request handler
 * @access public
 * @function {@link processRequest}
 */
export const processRequest = async (req, res, next) => {
  let correlation = req.headers["x-correlation-id"];
  if (!correlation) {
    correlation = dayjs().format("DD MMMM YYYY, hh:mm:ss A").toString();
    req.headers["x-correlation-id"] = correlation;
  }
  res.set("x-correlation-id", correlation);
  return next();
};

/**
 * @param  {} validate
 * @param  {} =>(req
 * @param  {} next
 * @desc validation handler
 * @access public
 * @function {@link handleValidation}
 */
export const handleValidation = (validate) => (req, res, next) => {
  const result = validate(req.body);
  const isValid = result.error == null;
  if (isValid) {
    return next();
  }

  const { details } = result.error;
  const messages = details.map((e) => e.message);
  const msg = messages.join(", ");
  throw new ErrorMessage.BedRequest(msg);
};
