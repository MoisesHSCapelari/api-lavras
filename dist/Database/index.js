"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _Database = require('../Config/Database'); var _Database2 = _interopRequireDefault(_Database);
var _User = require('../Models/User'); var _User2 = _interopRequireDefault(_User);
var _Children = require('../Models/Children'); var _Children2 = _interopRequireDefault(_Children);
var _EventEI = require('../Models/EventEI'); var _EventEI2 = _interopRequireDefault(_EventEI);
var _EventRegistration = require('../Models/EventRegistration'); var _EventRegistration2 = _interopRequireDefault(_EventRegistration);

const models = [_User2.default, _Children2.default, _EventEI2.default, _EventRegistration2.default];

const connection = new (0, _sequelize2.default)(_Database2.default);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
