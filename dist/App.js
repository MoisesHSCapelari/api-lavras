"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
_dotenv2.default.config();
require('./Database');
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _HomeRoutes = require('./Routes/HomeRoutes'); var _HomeRoutes2 = _interopRequireDefault(_HomeRoutes);
var _UserRoutes = require('./Routes/UserRoutes'); var _UserRoutes2 = _interopRequireDefault(_UserRoutes);
var _ChildrensRoutes = require('./Routes/ChildrensRoutes'); var _ChildrensRoutes2 = _interopRequireDefault(_ChildrensRoutes);
var _TokenRoutes = require('./Routes/TokenRoutes'); var _TokenRoutes2 = _interopRequireDefault(_TokenRoutes);
var _UploadRoutes = require('./Routes/UploadRoutes'); var _UploadRoutes2 = _interopRequireDefault(_UploadRoutes);
var _EventEIRoutes = require('./Routes/EventEIRoutes'); var _EventEIRoutes2 = _interopRequireDefault(_EventEIRoutes);
var _EventRegistrationRoutes = require('./Routes/EventRegistrationRoutes'); var _EventRegistrationRoutes2 = _interopRequireDefault(_EventRegistrationRoutes);

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
  }

  routes() {
    this.app.use('/', _HomeRoutes2.default);
    this.app.use('/usuarios', _UserRoutes2.default);
    this.app.use('/criancas', _ChildrensRoutes2.default);
    this.app.use('/tokens', _TokenRoutes2.default);
    this.app.use('/upload', _UploadRoutes2.default);
    this.app.use('/espaco-infantil', _EventEIRoutes2.default);
    this.app.use('/evento', _EventRegistrationRoutes2.default);
  }
}

exports. default = new App().app;
