"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);

var _MulterConfig = require('../Config/MulterConfig'); var _MulterConfig2 = _interopRequireDefault(_MulterConfig);

const uploadFile = _multer2.default.call(void 0, _MulterConfig2.default).single('fileUpload');

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

exports. default = new UploadController();
