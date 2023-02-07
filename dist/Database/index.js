"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _Database = require('../Config/Database'); var _Database2 = _interopRequireDefault(_Database);
var _User = require('../Models/User'); var _User2 = _interopRequireDefault(_User);
var _Children = require('../Models/Children'); var _Children2 = _interopRequireDefault(_Children);
var _SpaceChildren = require('../Models/SpaceChildren'); var _SpaceChildren2 = _interopRequireDefault(_SpaceChildren);
var _EventRegistration = require('../Models/EventRegistration'); var _EventRegistration2 = _interopRequireDefault(_EventRegistration);
var _Colaborate = require('../Models/Colaborate'); var _Colaborate2 = _interopRequireDefault(_Colaborate);
var _Gruop = require('../Models/Gruop'); var _Gruop2 = _interopRequireDefault(_Gruop);

const models = [_User2.default, _Children2.default, _SpaceChildren2.default, _EventRegistration2.default, _Colaborate2.default, _Gruop2.default];

const connection = new (0, _sequelize2.default)(_Database2.default);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
