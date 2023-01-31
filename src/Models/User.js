import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Nome não informado',
          },
        },
      },
      login: {
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
        defaultValue: '',
      },
      passwordPre: {
        type: Sequelize.VIRTUAL,
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
        user.password = await bcryptjs.hash(user.passwordPre, 10);
      }
    });

    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password);
  }
}
