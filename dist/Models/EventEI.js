"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _EventRegistration = require('./EventRegistration'); var _EventRegistration2 = _interopRequireDefault(_EventRegistration);

 class EventEI extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      historyTold: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Historia não informada',
          },
        },
      },
      gruop: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Grupo não informado',
          },
        },
      },
      contadora: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Nome do responsavel não informado',
          },
        },
      },
      dateEvent: {
        type: _sequelize2.default.DATE,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Data do espaço infantil não informada',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'eventsEI',
      freezeTableName: true,
    });

    return this;
  }
} exports.default = EventEI;
