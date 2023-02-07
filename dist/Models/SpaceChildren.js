"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class SpaceChildren extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      bibleStory: {
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
      tableName: 'spaceChildrens',
      freezeTableName: true,
    });

    return this;
  }
} exports.default = SpaceChildren;
