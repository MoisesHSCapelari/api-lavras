import Sequelize, { Model } from 'sequelize';

export default class Gruop extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        dafaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Nome do grupo não informado',
          },
        },
      },
      responsible: {
        type: Sequelize.STRING,
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
}
