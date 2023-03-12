import cloudinary from 'cloudinary';
import env from '../../config/app.config';
import removeFile from '../../domain/services/removeFile.service';

cloudinary.v2.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
});

/**
 * @param req
 * @param res
 * @access private
 * @route POST /api/upload_avatar
 * @function {@link uploadAvatar}
 */
export const uploadAvatar = (req: any, res: any) => {
  try {
    const { file } = req.files;

    cloudinary.v2.uploader.upload(
      file.tempFilePath,
      {
        folder: 'avatar',
        width: 150,
        height: 150,
        crop: 'fill',
      },
      async (err, result: any) => {
        if (err) throw err;

        removeFile(file.tempFilePath);

        res.json({ url: result.secure_url });
      }
    );
  } catch (err: any) {
    return res.status(500).json({ msg: err.message });
  }

  return true;
};
