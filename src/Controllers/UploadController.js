import multer from 'multer';

import MulterConfig from '../Config/MulterConfig';

const uploadFile = multer(MulterConfig).single('fileUpload');

class UploadController {
  async store(req, res) {
    return uploadFile(req, res, (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }
      /**
       * const {originalname, filename} = req.file;
      const uploadFiles = await Upload.create({originalname, filename});
       */
      return res.json(req.file);
    });
  }
}

export default new UploadController();
