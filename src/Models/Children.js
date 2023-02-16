import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class Children extends Model {
  static init(sequelize) {
    super.init({
      nameChildren: {
        type: Sequelize.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Nome não informado',
          },
        },
      },
      age: {
        type: Sequelize.INTEGER,

        validate: {
          notEmpty: {
            msg: 'Nome não informado',
          },
        },
      },
      nameGuardianOne: {
        type: Sequelize.STRING,
        dafaultValue: 0,
        validate: {
          notEmpty: {
            msg: 'Nome não informado',
          },
        },
      },
      phone: {
        type: Sequelize.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Nome não informado',
          },
        },
      },
      passwordEntry: {
        type: Sequelize.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Nome não informado',
          },
        },
      },
      passwordOut: {
        type: Sequelize.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Nome não informado',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'childrens',
      freezeTableName: true,
    });
    this.addHook('beforeSave', async (children) => {
      if (children.passwordEntry && children.passwordOut) {
        children.passwordEntry = await bcryptjs.hash(children.passwordEntry, 10);
        children.passwordOut = await bcryptjs.hash(children.passwordOut, 10);
      }
    });

    return this;
  }

  passwordEntryIsValid(passwordEntry) {
    return bcryptjs.compare(passwordEntry, this.passwordEntry);
  }

  passwordOutIsValid(passwordOut) {
    return bcryptjs.compare(passwordOut, this.passwordOut);
  }

  static associate(models) {
    this.belongsTo(models.SpaceChildren, { foreignKey: 'id_evento' });
  }
}
