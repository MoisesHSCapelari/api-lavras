"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class Colaborate extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      name: {
        type: _sequelize2.default.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Nome não informado',
          },
        },
      },
      maritalStatus: {
        type: _sequelize2.default.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Estado Civil não informado',
          },
        },
      },
      bDate: {
        type: _sequelize2.default.DATE,
        dafaultValue: 0,
        validate: {
          notEmpty: {
            msg: 'Data de Batismo não informada',
          },
        },
      },
      batismDate: {
        type: _sequelize2.default.DATE,
        dafaultValue: 0,
        validate: {
          notEmpty: {
            msg: 'Data de Batismo não informada',
          },
        },
      },
      RG: {
        type: _sequelize2.default.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'RG não informado',
          },
        },
      },
      CPF: {
        type: _sequelize2.default.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'CPF não informado',
          },
        },
      },
      phone: {
        type: _sequelize2.default.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Telefone não informado',
          },
        },
      },
      address: {
        type: _sequelize2.default.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Endereço não informado',
          },
        },
      },
      number: {
        type: _sequelize2.default.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Numero da Resiencia não informado',
          },
        },
      },
      hasChildren: {
        type: _sequelize2.default.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Informe se possui filhos',
          },
        },
      },
      qdtChildren: {
        type: _sequelize2.default.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Informe a quantidade de filhos',
          },
        },
      },
      ageChildren: {
        type: _sequelize2.default.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'informe a faixa etária do(s) filho(s)',
          },
        },
      },
      profission: {
        type: _sequelize2.default.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Proffisão não informada',
          },
        },
      },
      workChildren: {
        type: _sequelize2.default.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'finforme se ja trabalhou com crianças',
          },
        },
      },
      church: {
        type: _sequelize2.default.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Comum congregação não informada',
          },
        },
      },
      contactChildren: {
        type: _sequelize2.default.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Informe se Possui contato com crianças',
          },
        },
      },
      disponibilit: {
        type: _sequelize2.default.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Disponibilidade não Informada',
          },
        },
      },

    }, {
      sequelize,
      tableName: 'colaborates',
      freezeTableName: true,
    });
    return this;
  }
} exports.default = Colaborate;
