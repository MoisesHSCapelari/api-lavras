"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class EventRegistration extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      id_evento: {
        type: _sequelize2.default.INTEGER,
        allowNull: true,
        references: {
          model: 'EventEI',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      status: {
        type: _sequelize2.default.STRING,
        allowNull: true,
        dafaultValue: 'entrou',
        validate: {
          notEmpty: {
            msg: 'o Status nao pode ser Vazio',
          },
        },
      },
      nameChildren: {
        type: _sequelize2.default.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Nome não informado',
          },
        },
      },
      age: {
        type: _sequelize2.default.INTEGER,

        validate: {
          notEmpty: {
            msg: 'Nome não informado',
          },
        },
      },
      nameGuardianOne: {
        type: _sequelize2.default.STRING,
        dafaultValue: 0,
        validate: {
          notEmpty: {
            msg: 'Nome não informado',
          },
        },
      },
      phone: {
        type: _sequelize2.default.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Nome não informado',
          },
        },
      },
      passwordEntry: {
        type: _sequelize2.default.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Nome não informado',
          },
        },
      },
      passwordOut: {
        type: _sequelize2.default.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Nome não informado',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'eventRegistration',
      freezeTableName: true,
    });
    this.addHook('beforeSave', async (children) => {
      if (children.passwordEntry && children.passwordOut) {
        children.passwordEntry = await _bcryptjs2.default.hash(children.passwordEntry, 10);
        children.passwordOut = await _bcryptjs2.default.hash(children.passwordOut, 10);
      }
    });

    return this;
  }

  passwordEntryIsValid(passwordEntry) {
    return _bcryptjs2.default.compare(passwordEntry, this.passwordEntry);
  }

  passwordOutIsValid(passwordOut) {
    return _bcryptjs2.default.compare(passwordOut, this.passwordOut);
  }

  static associate(models) {
    this.belongsTo(models.SpaceChildren, { foreignKey: 'id_evento' });
  }
} exports.default = EventRegistration;
