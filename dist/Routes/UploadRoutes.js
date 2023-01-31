"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UploadController = require('../Controllers/UploadController'); var _UploadController2 = _interopRequireDefault(_UploadController);
var _LoginRequired = require('../Middlewares/LoginRequired'); var _LoginRequired2 = _interopRequireDefault(_LoginRequired);

const router = new (0, _express.Router)();

router.post('/', _LoginRequired2.default, _UploadController2.default.store);
exports. default = router;
