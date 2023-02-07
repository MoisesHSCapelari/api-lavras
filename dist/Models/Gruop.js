"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Gruop extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      name: {
        type: _sequelize2.default.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Nome do grupo não informado',
          },
        },
      },
      responsible: {
        type: _sequelize2.default.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Responsavel do gruop não informado',
          },
        },
      },

    }, {
      sequelize,
      tableName: 'grupEI',
      freezeTableName: true,
    });
    return this;
  }
} exports.default = Gruop;
