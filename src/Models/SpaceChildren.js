import Sequelize, { Model } from 'sequelize';

export default class SpaceChildren extends Model {
  static init(sequelize) {
    super.init({
      bibleStory: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Historia não informada',
          },
        },
      },
      gruop: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Grupo não informado',
          },
        },
      },
      contadora: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Nome do responsavel não informado',
          },
        },
      },
      dateEvent: {
        type: Sequelize.DATE,
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
}
