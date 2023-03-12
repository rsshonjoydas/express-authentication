import removeFile from '../../domain/services/removeFile.service';
/**
 * @description Middleware function to upload image
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function
 * @returns True if image length and type is successful, otherwise returns an error response
 * @function {@link uploadImage}
 */
const uploadImage = async (req: any, res: any, next: any) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0)
      return res.status(400).json({ msg: 'No files were uploaded.' });

    const { file } = req.files;

    if (file.size > 1024 * 1024) {
      removeFile(file.tempFilePath);
      return res.status(400).json({ msg: 'Size too large.' });
    } // 1mb

    if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
      removeFile(file.tempFilePath);
      return res.status(400).json({ msg: 'File format is incorrect.' });
    }

    next();
  } catch (err: any) {
    return res.status(500).json({ msg: err.message });
  }

  return true;
};

export default uploadImage;
