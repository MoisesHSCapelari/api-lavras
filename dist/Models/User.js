"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class User extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Nome não informado',
          },
        },
      },
      login: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'Ja existe um usuário com este login, por favor escolha outro',
        },
        validate: {
          len: {
            arg: [3, 255],
            msg: 'O Login do Usuário precisa ter ao menos 3 caracteres',
          },
          notEmpty: {
            msg: 'Login não informado',
          },
        },
      },
      password: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      passwordPre: {
        type: _sequelize2.default.VIRTUAL,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Senha não informada',
          },
        },
      },

    }, {
      sequelize,
      tableName: 'users',
      freezeTableName: true,
    });

    this.addHook('beforeSave', async (user) => {
      if (user.passwordPre) {
        user.password = await _bcryptjs2.default.hash(user.passwordPre, 10);
      }
    });

    return this;
  }

  passwordIsValid(password) {
    return _bcryptjs2.default.compare(password, this.password);
  }
} exports.default = User;
