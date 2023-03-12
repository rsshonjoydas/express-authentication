import fs from 'fs';

/**
 * @param req
 * @param res
 * @access private
 * @function {@link removeFile}
 */
const removeFile = (path: string) => {
  fs.unlink(path, (err: any) => {
    if (err) throw err;
  });
};

export default removeFile;
